import {
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { TipoTelefone } from '../entities/telefone.entity';
import { Type } from 'class-transformer';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { Unidade } from 'src/unidade/entities/unidade.entity';

export class CreateTelefoneDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  numero: string;

  @IsEnum(TipoTelefone)
  @IsNotEmpty()
  tipo: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsOptional()
  @IsObject()
  unidade: Unidade;
}
