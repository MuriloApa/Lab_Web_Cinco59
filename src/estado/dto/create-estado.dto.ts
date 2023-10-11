import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  IsUppercase,
  Length,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Pais } from 'src/pais/entities/pais.entity';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

export class CreateEstadoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nome: string;

  @IsString()
  @Length(2, 2)
  @IsUppercase()
  sigla: string;

  @IsString()
  regiao: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  pais: Pais;
}
