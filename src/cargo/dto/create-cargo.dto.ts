import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCargoDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  nome: string;

  @IsString()
  @MinLength(2)
  sigla: string;

  @IsInt()
  ordenacaoForcada: number;
}
