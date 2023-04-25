import { Injectable } from '@nestjs/common';
import { CreateGradDto } from './dto/create-grad.dto';
import { UpdateGradDto } from './dto/update-grad.dto';

@Injectable()
export class GradsService {
  grads: UpdateGradDto[] = [
    {
      name: 'Tim',
      age: 30,
      frameworkOfChoice: 'Angular',
      id: 1681979186912
    }
  ];

  getAllGrads(): UpdateGradDto[] {
    return this.grads;
  }

  getGradById(id: number): UpdateGradDto {
    const gradToReturn = this.grads.find(grad => grad.id === id);
    if (!gradToReturn) throw new Error('Grad not found');
    return gradToReturn;
  }

  createNewGrad(grad: CreateGradDto): UpdateGradDto {
    const newGrad = {
      ...grad,
      id: new Date().getTime()
    }
    this.grads.push(newGrad);
    return newGrad;
  }

  updateGrad(id: number, grad: UpdateGradDto): UpdateGradDto {
    const gradToUpdate = this.grads.find(existingGrad => id === existingGrad.id);
    if (!gradToUpdate) throw new Error('Grad not found');

    const updatedGrad = {
      ...gradToUpdate,
      ...grad
    }

    this.grads = this.grads.map(grad => grad.id !== id ? grad : updatedGrad);

    return updatedGrad;
  }

  deleteGrad(id: number): UpdateGradDto {
    const gradToDelete = this.grads.find(existingGrad => id === existingGrad.id);
    if (!gradToDelete) throw new Error('Grad not found');
    this.grads = this.grads.filter(grad => grad.id !== id);
    return gradToDelete;
  }
}
