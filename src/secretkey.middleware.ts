import {
  HttpException,
  HttpService,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common'

@Injectable()
export class SecretkeyMiddleware implements NestMiddleware {
  // constructor(private httpService: HttpService) {}
  constructor(private readonly httpService: HttpService) {}

  async use(req: any, res: any, next: () => void): Promise<any> {
    const access_key = {
      query: `
      query MyQuery {
        access_keys(where: {access_key: {_eq: "${req.headers.secretkey}"}}) {
        company_id
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
      !('errors' in access_response.data) &&
      access_response.data.data.access_keys.length > 0
    ) {
      // console.log(access_response.data.data.access_keys)
      next()
    } else {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Sorry your entered secret key is invalid',
        },
        403,
      )
    }
  }
}
