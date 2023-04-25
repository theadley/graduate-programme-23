import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateGradDto } from './dto/create-grad.dto';
import { UpdateGradDto } from './dto/update-grad.dto';
import { GradsGuard } from './grads.guard';
import { GradsService } from './grads.service';

@Controller('grads')
@UseGuards(GradsGuard)
export class GradsController {

  constructor(private gradService: GradsService) { }

  @Get()
  getAllGrads(): UpdateGradDto[] {
    return this.gradService.getAllGrads();
  }

  @Get(':id')
  getOneGrad(@Param('id', ParseIntPipe) id: number): UpdateGradDto {
    try {
      return this.gradService.getGradById(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Boo hoo, no grad here'
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error
        });
    }
  }

  @Post()
  createGrad(@Body(new ValidationPipe()) gradToCreate: CreateGradDto): UpdateGradDto {
    return this.gradService.createNewGrad(gradToCreate);
  }

  @Put(':id')
  updateGrad(@Param('id', ParseIntPipe) id: number, @Body() gradToUpdate: UpdateGradDto): UpdateGradDto {
    try {
      return this.gradService.updateGrad(id, gradToUpdate);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  deleteGrad(@Param('id', ParseIntPipe) id: number): UpdateGradDto {
    try {
      return this.gradService.deleteGrad(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
