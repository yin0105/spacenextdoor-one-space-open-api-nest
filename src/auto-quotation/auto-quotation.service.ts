import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'
import { AutoQuotationInputDto } from './auto-quotation.dto'

@Injectable()
export class AutoQuotationService {
  constructor(private readonly httpService: HttpService) {}

  async getContact(autoQuotationInputDto: AutoQuotationInputDto): Promise<any> {
    const sql = {
      query: `
      query getContact($email: String) {
        users(where: {email: {_eq: "${autoQuotationInputDto.email}"}}) {
          address_id
          email
          first_name
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

  async createContact(
    first_name: String,
    last_name: String,
    email: String,
    contact_number: String,
    lead_origin: String,
    rental_purpose: String,
  ): Promise<any> {}

  async create(autoQuotationInputDto: AutoQuotationInputDto): Promise<any> {
    return await this.getContact(autoQuotationInputDto)
  }
}
