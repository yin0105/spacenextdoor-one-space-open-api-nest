import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { NotificationService } from '@space-next-door/onslib/dist/modules/notification'
import { Request } from 'express'
import { AutoQuotationService } from './auto-quotation.service'
import { AutoQuotationInputDto } from './dto/auto-quotation.dto'

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
    const notificationService = new NotificationService()
    const result = await this.autoQuotationService.create(autoQuotationInputDto)

    const args = {
      subject: 'Here is your quotation',
      body: 'Please find your quotation attached',
      attachments: null,
    }
    await notificationService.sendCustomEmail(
      [autoQuotationInputDto.email],
      args,
    )

    return result
  }
}
