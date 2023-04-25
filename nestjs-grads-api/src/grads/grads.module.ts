import { Module } from '@nestjs/common';
import { GradsService } from './grads.service';
import { GradsController } from './grads.controller';

@Module({
  providers: [GradsService],
  controllers: [GradsController]
})
export class GradsModule {}
