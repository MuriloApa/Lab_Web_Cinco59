import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsPositive,
  Min,
  ValidateNested,
} from 'class-validator';
import { Indisponibilidade } from 'src/indisponibilidades/entities/indisponibilidade.entity';
import { Servidor } from 'src/servidor/entities/servidor.entity';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

export class CreateAfastamentoDto {
  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsNotEmptyObject()
  @IsDefined()
  servidor: Servidor;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsNotEmptyObject()
  @IsDefined()
  indisponibilidade: Indisponibilidade;

  @IsDate()
  @IsNotEmpty()
  dataInicio: Date;

  @IsInt()
  @IsPositive()
  @Min(1)
  duracao: number;

  @IsInt()
  exercicio: number;
}
