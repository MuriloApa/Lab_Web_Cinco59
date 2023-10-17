import { Terceirizado } from 'src/terceirizado/entities/terceirizado.entity';
import { Servidor, TipoClasse } from '../entities/servidor.entity';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { CreateEnderecoDto } from 'src/endereco/dto/create-endereco.dto';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { CreateTelefoneDto } from 'src/telefone/dto/create-telefone.dto';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import { CreateEmailDto } from 'src/email/dto/create-email.dto';
import { Email } from 'src/email/entities/email.entity';

export class CreateServidorDto {
  @IsInt()
  @IsNotEmpty()
  siape: number;

  @IsInt()
  @IsNotEmpty()
  matricula: number;

  @IsDateString()
  @IsNotEmpty()
  dataPosse: Date;

  @IsEnum(TipoClasse)
  @IsNotEmpty()
  classe: TipoClasse;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  nomeDeGuerra: string;

  @IsBoolean()
  @IsNotEmpty()
  ativo: boolean;

  @Type(() => RelationEntityDto)
  @ValidateNested()
  @IsObject()
  @IsOptional()
  chefe?: Servidor;

  @ValidateNested({ each: true })
  @Type(() => Servidor)
  @IsOptional()
  @IsArray()
  servidoresSubordinados?: Servidor[];

  @ValidateNested({ each: true })
  @Type(() => Terceirizado)
  @IsOptional()
  @IsArray()
  terceirizadosSubordinados?: Terceirizado[];

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

  @ValidateNested()
  @Type(() => CreateEmailDto)
  @IsArray()
  @IsOptional()
  emails?: Email[];
}
