import {
  IsArray,
  IsDefined,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { PessoaFisica } from 'src/pessoa-fisica/entities/pessoa-fisica.entity';
import { TipoEmail } from '../entities/email.entity';
import { Type } from 'class-transformer';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { Terceirizado } from 'src/terceirizado/entities/terceirizado.entity';

export class CreateEmailDto {
  @IsEmail()
  @IsNotEmpty()
  endereco: string;

  @IsArray()
  @IsOptional()
  @ValidateNested()
  @Type(() => RelationEntityDto)
  usuarios_unidade?: PessoaFisica[];

  @IsEnum(TipoEmail)
  @IsNotEmpty()
  tipo: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsDefined()
  @IsNotEmptyObject()
  proprietario: Terceirizado;
}
