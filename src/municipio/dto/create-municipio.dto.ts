import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  Length,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Estado } from 'src/estado/entities/estado.entity';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

export class CreateMunicipioDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nome: string;

  @IsString()
  @MinLength(2)
  sigla: string;

  @IsString()
  @Length(2, 2)
  ddd: string;

  @IsString()
  @MinLength(3)
  regiao: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  estado: Estado;
}
