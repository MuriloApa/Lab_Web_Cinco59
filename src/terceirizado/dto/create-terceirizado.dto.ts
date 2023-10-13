import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateEnderecoDto } from 'src/endereco/dto/create-endereco.dto';
import { CreatePessoaFisicaDto } from 'src/pessoa-fisica/dto/create-pessoa-fisica.dto';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { CreateTelefoneDto } from 'src/telefone/dto/create-telefone.dto';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import { CreateEmailDto } from 'src/email/dto/create-email.dto';
import { Email } from 'src/email/entities/email.entity';

export class CreateTerceirizadoDto extends CreatePessoaFisicaDto {
  @IsNotEmpty()
  @IsInt()
  matricula: number;

  @IsNotEmpty()
  @IsString()
  contrato: string;

  @IsNotEmpty()
  @IsString()
  empresa: string;

  @IsBoolean()
  @IsNotEmpty()
  ativo: boolean;

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
