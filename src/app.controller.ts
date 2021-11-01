import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@Controller()
export class AppController {
  @ApiTags('Health Check')
  @Get('health')
  getHealth(): string {
    return 'OK'
  }
}
