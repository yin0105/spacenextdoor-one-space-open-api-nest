import { Controller, Get, Headers, Param, Post } from '@nestjs/common'
import { ApiHeader, ApiTags } from '@nestjs/swagger'
import { BuildingService } from './building.service'

@ApiTags('Building')
@ApiHeader({
  name: 'SecretKey',
  description: 'Secret Key',
})
// @ApiBearerAuth()
@Controller()
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Post('building')
  create(@Headers() headers) {
    return this.buildingService.create(headers)
  }

  @Get('company/:id')
  findOne(@Headers() headers, @Param('id') id: string) {
    return this.buildingService.findByCompany(id, headers)
  }
}
