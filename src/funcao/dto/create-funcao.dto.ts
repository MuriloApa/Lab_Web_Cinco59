import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateFuncaoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nome: string;

  @IsString()
  @IsOptional()
  sigla?: string;

  @IsBoolean()
  @IsNotEmpty()
  exclusiva: boolean;

  @IsInt()
  @IsOptional()
  ordenacaoForcada?: number;
}
