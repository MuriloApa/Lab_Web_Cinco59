import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { PessoaFisica } from 'src/pessoa-fisica/entities/pessoa-fisica.entity';
import { TipoEmail } from '../entities/email.entity';
import { Type } from 'class-transformer';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

export class CreateEmailDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsArray()
  @IsNotEmptyObject()
  usuarios_unidade?: PessoaFisica[];

  @IsEnum(TipoEmail)
  @IsNotEmpty()
  tipo: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsObject()
  @IsNotEmptyObject()
  proprietario: PessoaFisica;
}
