import { Municipio } from 'src/municipio/entities/municipio.entity';
import { TipoEndereco } from '../entities/endereco.entity';
import {
  IsDefined,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

export class CreateEnderecoDto {
  @IsString()
  @Length(8, 8)
  @IsNotEmpty()
  CEP: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  logradouro: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  numero: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  bairro: string;

  @IsString()
  @IsOptional()
  observacao: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  municipio: Municipio;

  @IsEnum(TipoEndereco)
  @IsNotEmpty()
  tipo: string;
}
