import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { NotFoundError } from '@space-next-door/onslib/dist/exceptions'
import { graphQuery } from '@space-next-door/onslib/dist/graphql'
import { lastValueFrom } from 'rxjs'
import { AutoQuotationInputDto, CustomerDto } from './auto-quotation.dto'
import {
  CREATE_QUOTATION,
  GET_CONTACT,
  GET_KANBAN_STAGE,
  GET_PROMOTION,
  GET_UNIT,
  INSERT_CONTACT,
  INSERT_DEAL,
} from './gql'

@Injectable()
export class AutoQuotationService {
  constructor(private readonly httpService: HttpService) {}

  async sendPost(sql: object): Promise<any> {
    return await lastValueFrom(
      this.httpService.post(`${process.env.URL_HASURA}`, sql, {
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET,
        },
      }),
    )
  }

  async insertQuotationOne(
    due_date: Date,
    deal_id: number,
    company_id: number,
    building_id: number,
    unit_subtype_id: number,
    customer_id: number,
    move_in_date: Date,
  ): Promise<any> {
    const sql = {
      query: `
      mutation InsertQuotationOne {
        insert_quotations_one(object: {due_date: "${due_date}", deal_id: "${deal_id}", company_id: "${company_id}", status: "PENDING", building_id: "${building_id}", unit_subtype_id: "${unit_subtype_id}", customer_id: "${customer_id}", move_in_date: "${move_in_date}"}) {
          id
        }
      }
      `,
    }

    return await this.sendPost(sql)
  }

  async create(autoQuotationInputDto: AutoQuotationInputDto): Promise<any> {
    const building_id: number = autoQuotationInputDto.building_id
    const unit_type_id: number = autoQuotationInputDto.unit_type_id
    const duration: number = autoQuotationInputDto.duration * 30
    const email: string = autoQuotationInputDto.email
    const username: string = autoQuotationInputDto.username
    const contact_number: string = autoQuotationInputDto.contact_number
    const lead_origin: string = autoQuotationInputDto.lead_origin
    const rental_purpose: string = autoQuotationInputDto.notes
    const nameParts: string[] = username.split(' ')
    let customer: CustomerDto = new CustomerDto()
    let first_name: string, last_name: string

    // Get first_name and last_name from username
    if (nameParts.length > 1) {
      first_name = nameParts.slice(0, -1).join(' ')
      last_name = nameParts[nameParts.length - 1]
    } else {
      first_name = username
      last_name = ''
    }

    // Get Contact with provided email
    let result = await graphQuery(GET_CONTACT, { email })
    if (!result.data.customers) throw new NotFoundError('GET_CONTACT_ERROR')

    // if multiple customers exist then raise error
    if (result.data.customers.length > 1) {
      throw new NotFoundError('MULTI_CONTACTS_ERROR')
    } else if (result.data.customers.length == 1) {
      // There is only one customer with the email
      customer = result.data.customers[0]
    } else {
      // If there is no customers with the email, then create new customer with the email.

      // const result = await this.createContact(customer)
      result = await graphQuery(INSERT_CONTACT, {
        first_name,
        last_name,
        email,
        contact_number,
        lead_origin,
        rental_purpose,
      })

      if (!result.data.insert_customers_one)
        throw new NotFoundError('INSERT_CONTACT_ERROR')

      customer = result.data.insert_customers_one
    }

    // Get the cheapest Unit
    result = await graphQuery(GET_UNIT, { unit_type_id, building_id, duration })
    if (!result.data.units) throw new NotFoundError('GET_UNIT_ERROR')
    const company_id = result.data.units[0].unit_subtype.building.company_id
    const unit_subtype_id = result.data.units[0].unit_subtype_id

    // Get the kanban stage
    result = await graphQuery(GET_KANBAN_STAGE, { company_id })
    if (!result.data.kanban_stages || result.data.kanban_stages.length == 0)
      throw new NotFoundError('GET_KANBAN_STAGE_ERROR')

    const kanban_stages_id = result.data.kanban_stages[0].id
    const customer_id = customer.id

    // Insert Deal
    result = await graphQuery(INSERT_DEAL, { company_id, customer_id })
    if (!result.data.insert_deals_one)
      throw new NotFoundError('INSERT_DEAL_ERROR')

    const deal_id = result.data.insert_deals_one.id
    const due_date: string = new Date('2021-11-11').toUTCString()
    let tmr: Date = new Date()
    tmr.setUTCDate(tmr.getUTCDate() + 1)
    tmr.setUTCHours(0, 0, 0)

    const move_in_date: string = tmr.toUTCString()
    tmr.setUTCDate(tmr.getUTCDate() + duration)

    const move_out_date: string = tmr.toUTCString()
    console.log('date = ', move_out_date)

    // Get Promotion Code
    result = await graphQuery(GET_PROMOTION, {
      start_date: move_in_date,
      end_date: move_out_date,
    })
    if (!result.data.promotions) throw new NotFoundError('GET_PROMOTION_ERROR')

    const promotion_id: number = result.data.promotions[0].id
    console.log('promotion_id = ', promotion_id)

    // Create Quotation
    result = await graphQuery(CREATE_QUOTATION, {
      due_date,
      deal_id,
      company_id,
      building_id,
      unit_subtype_id,
      customer_id,
      move_in_date,
      promotion_id,
    })
    if (!result.data.insert_quotations_one)
      throw new NotFoundError('CREATE_QUOTATION_ERROR')

    throw new NotFoundError('CREATE_QUOTATION_ERROR')
  }
}
