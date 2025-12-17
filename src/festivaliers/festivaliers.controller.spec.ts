import { Test, TestingModule } from '@nestjs/testing';
import { FestivaliersController } from './festivaliers.controller';
import { FestivaliersService } from './festivaliers.service';

describe('FestivaliersController', () => {
  let controller: FestivaliersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FestivaliersController],
      providers: [FestivaliersService],
    }).compile();

    controller = module.get<FestivaliersController>(FestivaliersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
