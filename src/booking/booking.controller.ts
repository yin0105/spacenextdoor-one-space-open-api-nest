import { Body, Controller, Get, Headers, Post, Query } from '@nestjs/common'
import { ApiHeaders, ApiTags } from '@nestjs/swagger'
import { AuthHeaders } from '../auth/auth.headers'
import { BookingResponse } from '../graphql/types'
import { BookingResp, BookingService } from './booking.service'
import { CreateBookingDto } from './dto/create-booking.dto'
import { FilterBookingQuery } from './dto/query-booking.dto'

@ApiTags('Booking / Reservation')
@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('/')
  @ApiHeaders([{ name: 'x-hasura-company-id' }, { name: 'x-hasura-user-id' }])
  create(
    @Body() createBookingDto: CreateBookingDto,
    @Headers() headers: AuthHeaders,
  ): Promise<BookingResp> {
    return this.bookingService.create(createBookingDto, headers)
  }

  @Get('/')
  getBookings(
    @Query() filterBookingQuery: FilterBookingQuery,
  ): Promise<BookingResponse[]> {
    return this.bookingService.filterBookings(filterBookingQuery)
  }
}
