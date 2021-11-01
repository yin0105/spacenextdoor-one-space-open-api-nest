import {
  HttpException,
  HttpService,
  HttpStatus,
  Injectable,
} from '@nestjs/common'

@Injectable()
export class BuildingService {
  constructor(private httpService: HttpService) {}

  async create(req: any): Promise<any> {
    const access_key = {
      query: `
      query MyQuery {
      access_keys(where: {access_key: {_eq: "${req.secretkey}"}}) {
        id
      }
    }
    `,
    }
    const access_response = await this.httpService
      .post(`${process.env.URL_HASURA}`, access_key, {
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET,
        },
      })
      .toPromise()

    if (
      'errors' in access_response.data ||
      access_response.data.data.access_keys.length <= 0
    ) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Sorry your entered secret key is invalid',
        },
        403,
      )
    }

    const params = {
      query: `
  query MyQuery {
    companies(where: {id: {_eq: "${access_response.data.data.access_keys[0].id}"}}) {
      id
      buildings {
          company_id
          contact_name
          contact_number
          images
          name_en
          name_th
          show_id
          status
          unit_subtypes {
            units {
              availability_status
              status
              description_en
              description_th
              min_rent_days
              name_en
              name_th
              unit_subtype_id
              updated_at
            }
            total_units
          }
        }
    }
  }
  `,
    }

    const response = await this.httpService
      .post(`${process.env.URL_HASURA}`, params, {
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET,
        },
      })
      .toPromise()
    if (response.data.data.companies.length === 0) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Sorry your entered secret key is invalid',
        },
        403,
      )
    }
    return response.data.data
  }

  findAll() {
    return `This action returns all building`
  }

  async findByCompany(id: any, headers: any) {
    const params = {
      query: `
    query MyQuery {
      companies(where: {id: {_eq: ${id}}, secret_key: {_eq: "${headers.secretkey}"}}) {
        buildings {
          id
          contact_name
          contact_number
          images
          name_en
          name_th
          show_id
          status
          address_id
          company_id
          created_at
          updated_at
        }
      }
    }
    
    
  `,
    }

    const response = await this.httpService
      .post(`${process.env.URL_HASURA}`, params, {
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET,
        },
      })
      .toPromise()
    if (response.data.data.companies.length === 0) {
      return { error: 'Sorry, no record found please check your secret key.' }
    }
    return response.data.data
  }
}
