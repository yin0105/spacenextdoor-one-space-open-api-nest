import { HttpModule } from '@nestjs/axios'
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AutoquotationMiddleware } from './auto-quotation/auto-quotation.middleware'
import { AutoQuotationModule } from './auto-quotation/auto-quotation.module'
import { BookingModule } from './booking/booking.module'
import { BuildingModule } from './building/building.module'
import { CompanyModule } from './company/company.module'
import { ApolloClientModule } from './graphql/apollo-client/apollo-client.module'
import { SecretkeyMiddleware } from './secretkey.middleware'

@Module({
  imports: [
    HttpModule,
    BuildingModule,
    CompanyModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    BookingModule,
    ApolloClientModule,
    AutoQuotationModule,
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SecretkeyMiddleware).forRoutes('building')
    consumer
      .apply(AutoquotationMiddleware)
      .forRoutes({ path: 'auto-quotation', method: RequestMethod.POST })
  }
}
