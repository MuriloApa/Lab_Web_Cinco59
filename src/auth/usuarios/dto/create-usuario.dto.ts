import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PessoaFisica } from 'src/pessoa-fisica/entities/pessoa-fisica.entity';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

export class CreateUsuarioDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'senha muito fraca',
  })
  senha: string;

  @ValidateNested()
  @IsObject()
  @IsOptional()
  @Type(() => RelationEntityDto)
  pessoa?: PessoaFisica;
}
