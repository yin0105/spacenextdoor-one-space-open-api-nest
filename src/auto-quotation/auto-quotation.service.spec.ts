import { Test, TestingModule } from '@nestjs/testing';
import { AutoQuotationService } from './auto-quotation.service';

describe('AutoQuotationService', () => {
  let service: AutoQuotationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutoQuotationService],
    }).compile();

    service = module.get<AutoQuotationService>(AutoQuotationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
