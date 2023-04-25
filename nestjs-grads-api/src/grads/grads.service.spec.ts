import { Test, TestingModule } from '@nestjs/testing';
import { GradsService } from './grads.service';

describe('GradsService', () => {
  let service: GradsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradsService],
    }).compile();

    service = module.get<GradsService>(GradsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
