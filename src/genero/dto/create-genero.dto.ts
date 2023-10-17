import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateGeneroDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  nome: string;
}
