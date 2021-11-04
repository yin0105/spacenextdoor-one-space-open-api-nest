import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'
import { AutoQuotationInputDto, CustomerDto } from './auto-quotation.dto'

@Injectable()
export class AutoQuotationService {
  constructor(private readonly httpService: HttpService) {}

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
    const response = await lastValueFrom(
      this.httpService.post(`${process.env.URL_HASURA}`, sql, {
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET,
        },
      }),
    )
    return response
  }

  async createContact(customerDto: CustomerDto): Promise<any> {
    const sql = {
      query: `
      mutation InsertCustomers {
        insert_customers(objects: {
          first_name: "${customerDto.firstName}"
          last_name: "${customerDto.lastName}" 
          email: "${customerDto.email}"
          contact_number: "${customerDto.contactNumber}"
          lead_origin: "${customerDto.leadOrigin}"
          rental_purpose: "${customerDto.rentalPurpose}"
        }){
          returning {
            id
            first_name
            last_name
            email
            contact_number
            lead_origin
            rental_purpose      
          }
        }
      }
      `,
    }
    const response = await lastValueFrom(
      this.httpService.post(`${process.env.URL_HASURA}`, sql, {
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET,
        },
      }),
    )

    return response
  }

  async create(autoQuotationInputDto: AutoQuotationInputDto): Promise<any> {
    // Get Contact with provided email
    const result = await this.getContact(autoQuotationInputDto)

    if (result.data.errrors) {
      return result.data.errrors
    }

    console.log('result.data = ', result.data)
    let customer: CustomerDto

    // if multiple customers exist then raise error
    if (result.data.data.customers.length > 1) {
      return 'There are multiple customers using the email.'
    } else if (result.data.data.customers.length == 1) {
      // There is only one customer using the email
      customer = result.data.data.customers[0]
    } else {
      console.log('None')
      // If there is no customers using the email, then create new customer with the email.
      const nameParts: string[] = autoQuotationInputDto.username.split(' ')
      let customerDto: CustomerDto = new CustomerDto()

      if (nameParts.length > 1) {
        customerDto.firstName = nameParts.slice(0, -1).join(' ')
        customerDto.lastName = nameParts[nameParts.length - 1]
      } else {
        customerDto.firstName = autoQuotationInputDto.username
        customerDto.lastName = ''
      }
      customerDto.email = autoQuotationInputDto.email
      customerDto.contactNumber = autoQuotationInputDto.contactNumber
      customerDto.leadOrigin = autoQuotationInputDto.leadOrigin
      customerDto.rentalPurpose = autoQuotationInputDto.notes

      const result_2 = await this.createContact(customerDto)
      if (result_2.data.errors) {
        return 'Creating Contact failed'
      }
      customer = result_2.data.data.insert_customers.returning[0]
    }

    return customer
  }
}
