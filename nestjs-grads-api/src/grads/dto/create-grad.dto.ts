import { IsEnum, IsInt, MinLength } from "class-validator";

export class CreateGradDto {
  @MinLength(5)
  name: string;

  @IsInt()
  age: number;

  @IsEnum(['React', 'Angular'], { message: 'You must use a framework that I taught you!' })
  frameworkOfChoice: 'React' | 'Angular';
}