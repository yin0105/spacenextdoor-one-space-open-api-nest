import { HttpModule, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { BookingModule } from './booking/booking.module'
import { BuildingModule } from './building/building.module'
import { CompanyModule } from './company/company.module'
import { ApolloClientModule } from './graphql/apollo-client/apollo-client.module'
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
  ],
  controllers: [AppController],
})
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(SecretkeyMiddleware).forRoutes('building')
//   }
// }
export class AppModule {}
