import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Length,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateEnderecoDto } from 'src/endereco/dto/create-endereco.dto';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Genero } from 'src/genero/entities/genero.entity';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { CreateTelefoneDto } from 'src/telefone/dto/create-telefone.dto';
import { Telefone } from 'src/telefone/entities/telefone.entity';

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

  @IsString()
  @MinLength(3)
  sexo: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  genero: Genero;

  @IsString()
  @Length(2)
  tipoSanguineo: string;

  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  @IsArray()
  @IsOptional()
  enderecos?: Endereco[];

  @ValidateNested({ each: true })
  @Type(() => CreateTelefoneDto)
  @IsArray()
  @IsOptional()
  telefones?: Telefone[];
}
