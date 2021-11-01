import { HttpModule, Module } from '@nestjs/common'
import { ApolloClientModule } from 'src/graphql/apollo-client/apollo-client.module'
import { BuildingService } from './building.service'
import { CompanyController } from './company.controller'

@Module({
  imports: [HttpModule, ApolloClientModule],
  controllers: [CompanyController],
  providers: [BuildingService],
})
export class CompanyModule {}
