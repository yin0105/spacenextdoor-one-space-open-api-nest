import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { Request } from 'express'
import { AutoQuotationInputDto } from './auto-quotation.dto'
import { AutoQuotationService } from './auto-quotation.service'

@Controller('auto-quotation')
export class AutoQuotationController {
  constructor(private readonly autoQuotationService: AutoQuotationService) {}

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats'
  }

  @Post()
  async create(
    @Body() autoQuotationInputDto: AutoQuotationInputDto,
  ): Promise<any> {
    const result = await this.autoQuotationService.create(autoQuotationInputDto)
    console.log('result = ', result)

    return result
  }
}
