import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ApolloClientService } from './apollo-client.service'

@Module({
  imports: [ConfigModule],
  providers: [ApolloClientService],
  exports: [ApolloClientService],
})
export class ApolloClientModule {}
