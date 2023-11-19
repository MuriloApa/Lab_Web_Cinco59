import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUppercase,
  Length,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateTelefoneDto } from 'src/telefone/dto/create-telefone.dto';
import { Telefone } from 'src/telefone/entities/telefone.entity';

export class CreateFuncaoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nome: string;

  @IsString()
  @IsOptional()
  @IsUppercase()
  @Length(3, 3)
  sigla?: string;

  @IsBoolean()
  @IsNotEmpty()
  exclusiva: boolean;

  @IsInt()
  @IsNotEmpty()
  ordenacaoForcada?: number;

  @IsBoolean()
  @IsNotEmpty()
  ativa: boolean;

  @ValidateNested()
  @Type(() => CreateTelefoneDto)
  @IsOptional()
  telefone?: Telefone;
}
