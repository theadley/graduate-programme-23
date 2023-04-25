import { Test, TestingModule } from '@nestjs/testing';
import { GradsController } from './grads.controller';

describe('GradsController', () => {
  let controller: GradsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradsController],
    }).compile();

    controller = module.get<GradsController>(GradsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
