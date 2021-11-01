import { Module } from '@nestjs/common'
import { ApolloClientModule } from '../graphql/apollo-client/apollo-client.module'
import { BookingController } from './booking.controller'
import { BookingService } from './booking.service'

@Module({
  imports: [ApolloClientModule],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
