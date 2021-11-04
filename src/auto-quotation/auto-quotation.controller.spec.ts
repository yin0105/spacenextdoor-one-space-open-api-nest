import { Test, TestingModule } from '@nestjs/testing';
import { AutoQuotationController } from './auto-quotation.controller';

describe('AutoQuotationController', () => {
  let controller: AutoQuotationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutoQuotationController],
    }).compile();

    controller = module.get<AutoQuotationController>(AutoQuotationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
