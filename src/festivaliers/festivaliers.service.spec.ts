import { Test, TestingModule } from '@nestjs/testing';
import { FestivaliersService } from './festivaliers.service';

describe('FestivaliersService', () => {
  let service: FestivaliersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FestivaliersService],
    }).compile();

    service = module.get<FestivaliersService>(FestivaliersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
