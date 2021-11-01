import { HttpModule } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { BuildingController } from './building.controller'
import { BuildingService } from './building.service'

describe('BuildingController', () => {
  let controller: BuildingController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [BuildingController],
      providers: [BuildingService],
    }).compile()

    controller = module.get<BuildingController>(BuildingController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
