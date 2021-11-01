import { HttpModule, Module } from '@nestjs/common'
import { BuildingController } from './building.controller'
import { BuildingService } from './building.service'

@Module({
  imports: [HttpModule],
  controllers: [BuildingController],
  providers: [BuildingService],
})
export class BuildingModule {}
