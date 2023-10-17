import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsPositive,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Funcao } from 'src/funcao/entities/funcao.entity';
import { Servidor } from 'src/servidor/entities/servidor.entity';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

export class CreateDesignacoeDto {
  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  servidor: Servidor;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  funcao: Funcao;

  @IsDate()
  @IsNotEmpty()
  dataDesignacao: Date;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  documento: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  numDocumento: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  anoDocumento: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  processoSei: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  documentoSei: number;

  @IsDate()
  @IsNotEmpty()
  dataDispensa: Date;
}
