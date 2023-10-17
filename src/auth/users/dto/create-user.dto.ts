import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsEnum,
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
import { Role } from 'src/shared/enums/roles.enum';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @ValidateNested()
  @Type(() => RelationEntityDto)
  @IsOptional()
  @IsObject()
  pessoaAssociada: PessoaFisica;

  @IsArray()
  @IsNotEmpty()
  @IsEnum(Role, { each: true })
  roles: number[];
}
