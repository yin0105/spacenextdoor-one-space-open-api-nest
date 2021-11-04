import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { AutoQuotationController } from './auto-quotation.controller'
import { AutoQuotationService } from './auto-quotation.service'

@Module({
  imports: [HttpModule],
  providers: [AutoQuotationService],
  controllers: [AutoQuotationController],
})
export class AutoQuotationModule {}
