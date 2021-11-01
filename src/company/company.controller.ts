import { Controller, Get, Param } from '@nestjs/common'
import { ApiHeader, ApiTags } from '@nestjs/swagger'
import { BuildingService } from './building.service'

@ApiTags('Company')
@ApiHeader({
  name: 'SecretKey',
  description: 'Secret Key',
})
// @ApiBearerAuth()
@Controller('company')
export class CompanyController {
  constructor(private readonly service: BuildingService) {}
  @Get(':id/buildings')
  async getBuildings(@Param('id') id: number) {
    const buildings = await this.service.getBuildings(id)
    return buildings.map((b) => {
      const unit_subtypes = b.unit_subtypes.map(this.mapUnitSubtype)
      return {
        ...b,
        unit_subtypes,
      }
    })
  }
  mapUnitSubtype = (ust) => {
    let i = 0
    let totalUnitIndex = 0
    const keys = []
    for (const key in ust) {
      if (key === 'total_units') {
        totalUnitIndex = i
      }
      keys.push(key)
      i++
    }
    keys.splice(totalUnitIndex + 1, 0, 'available_for_rent')
    const result = {}
    for (const key of keys) {
      const value = key === 'available_for_rent' ? ust.units.length : ust[key]
      result[key] = value
    }

    return result
  }
}
