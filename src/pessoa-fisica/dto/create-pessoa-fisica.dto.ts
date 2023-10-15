import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  Length,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Cargo } from 'src/cargo/entities/cargo.entity';
import { Genero } from 'src/genero/entities/genero.entity';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { TipoSanguineo, TipoSexo } from '../entities/pessoa-fisica.entity';

export class CreatePessoaFisicaDto {
  @IsString()
  @Length(11, 11)
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  nome: string;

  @IsDate()
  @IsNotEmpty()
  dataNascimento: Date;

  @IsEnum(TipoSexo)
  @IsNotEmpty()
  sexo: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  genero: Genero;

  @IsEnum(TipoSanguineo)
  @IsOptional()
  tipoSanguineo?: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsNotEmptyObject()
  cargo: Cargo;

  /* @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  @IsArray()
  @IsOptional()
  enderecos?: Endereco[]; */

  /* @ValidateNested({ each: true })
  @Type(() => CreateTelefoneDto)
  @IsArray()
  @IsOptional()
  telefones?: Telefone[]; */

  /* @ValidateNested()
  @Type(() => CreateEmailDto)
  @IsArray()
  @IsOptional()
  emails?: Email[]; */
}
