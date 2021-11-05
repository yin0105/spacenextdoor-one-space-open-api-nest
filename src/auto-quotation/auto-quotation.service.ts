import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'
import { AutoQuotationInputDto, CustomerDto } from './auto-quotation.dto'

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

  async createContact(customerDto: CustomerDto): Promise<any> {
    const sql = {
      query: `
      mutation InsertCustomers {
        insert_customers_one(object: {
          first_name: "${customerDto.first_name}"
          last_name: "${customerDto.last_name}" 
          email: "${customerDto.email}"
          contact_number: "${customerDto.contact_number}"
          lead_origin: "${customerDto.lead_origin}"
          rental_purpose: "${customerDto.rentalPurpose}"
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
    // Get Contact with provided email
    const building_id: number = autoQuotationInputDto.building_id
    let customer: CustomerDto

    const result = await this.getContact(autoQuotationInputDto)

    if (result.data.errrors) {
      return result.data.errrors
    }

    console.log('result.data = ', result.data)

    // if multiple customers exist then raise error
    if (result.data.data.customers.length > 1) {
      return 'There are multiple customers using the email.'
    } else if (result.data.data.customers.length == 1) {
      // There is only one customer using the email
      customer = result.data.data.customers[0]
    } else {
      // If there is no customers using the email, then create new customer with the email.
      const nameParts: string[] = autoQuotationInputDto.username.split(' ')
      let customerDto: CustomerDto = new CustomerDto()

      if (nameParts.length > 1) {
        customerDto.first_name = nameParts.slice(0, -1).join(' ')
        customerDto.last_name = nameParts[nameParts.length - 1]
      } else {
        customerDto.first_name = autoQuotationInputDto.username
        customerDto.last_name = ''
      }
      customerDto.email = autoQuotationInputDto.email
      customerDto.contact_number = autoQuotationInputDto.contact_number
      customerDto.lead_origin = autoQuotationInputDto.lead_origin
      customerDto.rentalPurpose = autoQuotationInputDto.notes

      const result_2 = await this.createContact(customerDto)
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
