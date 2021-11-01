import { Exclude, Expose } from 'class-transformer'
import { IsString } from 'class-validator'

@Exclude() // None of other headers go through
export class AuthHeaders {
  @Expose()
  @IsString()
  'x-hasura-company-id': string

  @Expose()
  @IsString()
  'x-hasura-user-id': string
}
