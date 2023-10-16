import { Type } from 'class-transformer';
import {
    IsArray,
  IsBoolean,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  IsUppercase,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { Unidade } from '../entities/unidade.entity';
import { CreateTelefoneDto } from 'src/telefone/dto/create-telefone.dto';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import { CreateEnderecoDto } from 'src/endereco/dto/create-endereco.dto';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Email } from 'src/email/entities/email.entity';

export class CreateUnidadeDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  nome: string;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  @IsUppercase()
  sigla: string;

  @IsBoolean()
  @IsNotEmpty()
  formal: boolean;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsNotEmptyObject()
  @IsOptional()
  unidadeSuperiorImediata: Unidade;

  @IsInt()
  @IsNotEmpty()
  ordenacaoForcada: number;

  @ValidateNested()
  @Type(() => CreateTelefoneDto)
  @IsArray()
  @IsOptional()
  telefones?: Telefone[];

  @ValidateNested()
  @Type(() => CreateEnderecoDto)
  @IsArray()
  @IsOptional()
  enderecos?: Endereco[];

  @ValidateNested()
  @Type(() => CreateEnderecoDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  emails: Email;
}
