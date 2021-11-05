import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { NotFoundError } from '@space-next-door/onslib/dist/exceptions'
import { graphQuery } from '@space-next-door/onslib/dist/graphql'
import { lastValueFrom } from 'rxjs'
import { AutoQuotationInputDto, CustomerDto } from './auto-quotation.dto'
import { GET_CONTACT } from './gql'

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

  async getContact(autoQuotationInputDto: AutoQuotationInputDto): Promise<any> {
    const sql = {
      query: `
      query getContact($email: string) {
        customers(where: {email: {_eq: "${autoQuotationInputDto.email}"}}) {
          id
          first_name
          last_name
          email
          contact_number
          lead_origin
          rental_purpose 
        }
      }
      `,
    }

    return await this.sendPost(sql)
  }

  async createContact(customer: CustomerDto): Promise<any> {
    const sql = {
      query: `
      mutation InsertCustomers {
        insert_customers_one(object: {
          first_name: "${customer.first_name}"
          last_name: "${customer.last_name}" 
          email: "${customer.email}"
          contact_number: "${customer.contact_number}"
          lead_origin: "${customer.lead_origin}"
          rental_purpose: "${customer.rental_purpose}"
        }){
            id
            first_name
            last_name
            email
            contact_number
            lead_origin
            rental_purpose      
        }
      }
      `,
    }

    return await this.sendPost(sql)
  }

  async getUnit(
    building_id: number,
    unit_type_id: number,
    duration: number,
  ): Promise<any> {
    const sql = {
      query: `
      query GetUnit() {
        units(where: {unit_subtype: {unit_type_id: {_eq: "${unit_type_id}"}, _and: {building_id: {_eq: "${building_id}"}}}, _and: {min_rent_days: {_lte: "${duration}"}}}, order_by: {unit_subtype: {price_per_month: asc}}, limit: 1) {
          id
          unit_subtype {
            unit_type_id
            building_id
            price_per_month
            id
            building {
              company_id
            }
          }
          unit_subtype_id
          name_en
          name_th
          description_en
          description_th
          availability_status
          access_status
          min_rent_days
          status
        }
      }
      `,
    }

    return await this.sendPost(sql)
  }

  async getKanbanStage(company_id: number): Promise<any> {
    const sql = {
      query: `
      query GetKanbanStage {
        kanban_stages(where: {name_en: {_eq: ""}, name_th: {_eq: ""}, company_id: {_eq: "${company_id}"}}) {
          id
        }
      }
      `,
    }

    return await this.sendPost(sql)
  }

  async insertKanbanStageOne(company_id: number): Promise<any> {
    const sql = {
      query: `
      mutation InsertKanbanStagesOne {
        insert_kanban_stages_one(object: {company_id: "${company_id}", deal_status: "OPEN", name_en: "", name_th: ""}) {
          id
        }
      }
      `,
    }

    return await this.sendPost(sql)
  }

  async insertDealOne(company_id: number, customer_id: number): Promise<any> {
    const sql = {
      query: `
      mutation InsertDealOne {
        insert_deals_one(object: {company_id: "${company_id}", customer_id: "${customer_id}", status: "OPEN"}) {
          id
        }
      }
      `,
    }

    return await this.sendPost(sql)
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
    const email: string = autoQuotationInputDto.email
    const nameParts: string[] = autoQuotationInputDto.username.split(' ')
    let customer: CustomerDto = new CustomerDto()

    // Get first_name and last_name from username
    if (nameParts.length > 1) {
      customer.first_name = nameParts.slice(0, -1).join(' ')
      customer.last_name = nameParts[nameParts.length - 1]
    } else {
      customer.first_name = autoQuotationInputDto.username
      customer.last_name = ''
    }
    customer.email = autoQuotationInputDto.email
    customer.contact_number = autoQuotationInputDto.contact_number
    customer.lead_origin = autoQuotationInputDto.lead_origin
    customer.rental_purpose = autoQuotationInputDto.notes

    // Get Contact with provided email
    // const result = await this.getContact(autoQuotationInputDto)
    let result = await graphQuery(GET_CONTACT, { email })
    if (!result.data.customers) throw new NotFoundError('GET_CONTACT_ERROR')

    console.log('result.data = ', result.data)

    // if multiple customers exist then raise error
    if (result.data.customers.length > 1) {
      throw new NotFoundError('MULTI_CONTACTS_ERROR')
    } else if (result.data.customers.length == 1) {
      // There is only one customer using the email
      customer = result.data.customers[0]
    } else {
      // If there is no customers using the email, then create new customer with the email.

      const result_2 = await this.createContact(customer)
      console.log(result_2.data)
      if (result_2.data.errors) {
        return 'Creating Contact failed'
      }
      customer = result_2.data.data.insert_customers_one
    }

    // Get the cheapest Unit
    console.log('building_id = ', building_id)

    return customer
  }
}

//  ------------- Get Kanban Stage ------------------

// -------------  Insert Kanban Stage -----------------

// --------------  Insert Deal One -------------

// --------------  Insert Quotation One  ---------------
