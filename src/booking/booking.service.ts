import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { AuthHeaders } from '../auth/auth.headers'
import { ApolloClientService } from '../graphql/apollo-client/apollo-client.service'
import { ADD_BOOKING_MUTATION } from '../graphql/mutation/booking.mutation'
import { GET_BOOKINGS_QUERY } from '../graphql/query/booking.query'
import {
  BookingResponse,
  Mutation_RootAddNewBookingArgs,
} from '../graphql/types'
import { CreateBookingDto } from './dto/create-booking.dto'
import { FilterBookingQuery } from './dto/query-booking.dto'

export type BookingResp = BookingResponse & { promo_code?: string }

@Injectable()
export class BookingService {
  constructor(private readonly apolloService: ApolloClientService) {}

  async create(
    createBookingDto: CreateBookingDto,
    {
      'x-hasura-company-id': xHasuraCompanyId,
      'x-hasura-user-id': xHasuraUserId,
    }: AuthHeaders,
  ): Promise<BookingResp> {
    try {
      const { data, errors } = await this.apolloService.mutate<
        BookingResponse,
        Mutation_RootAddNewBookingArgs
      >(
        {
          mutation: ADD_BOOKING_MUTATION,
          variables: createBookingDto,
        },
        {
          'x-hasura-company-id': xHasuraCompanyId,
          'x-hasura-user-id': xHasuraUserId,
        },
      )

      if (errors?.length) {
        throw new InternalServerErrorException(errors)
      }

      return data
    } catch (err) {
      throw new InternalServerErrorException(err)
    }
  }

  async filterBookings({
    company_id,
    unit_subtype_id,
    move_in_date,
    move_out_date,
  }: FilterBookingQuery): Promise<BookingResponse[]> {
    const companyId = parseInt(company_id)
    const unitSubTypeId = parseInt(unit_subtype_id)

    const { data } = await this.apolloService.query<{
      bookings: BookingResponse[]
    }>({
      query: GET_BOOKINGS_QUERY,
      variables: {
        company_id: companyId,
        unit_subtype_id: unitSubTypeId,
        move_in_date,
        move_out_date,
      },
    })

    return data.bookings
  }
}
