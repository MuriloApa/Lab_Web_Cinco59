import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUppercase,
  MinLength,
} from 'class-validator';

export class CreateCargoDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  nome: string;

  @IsString()
  @MinLength(2)
  @IsUppercase()
  sigla: string;

  @IsInt()
  ordenacaoForcada: number;

  @IsBoolean()
  @IsNotEmpty()
  ativa: boolean;
}
