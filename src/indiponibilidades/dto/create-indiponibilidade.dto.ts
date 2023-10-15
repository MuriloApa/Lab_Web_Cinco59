import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateIndiponibilidadeDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nome: string;
}
