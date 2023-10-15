import {
  IsNotEmpty,
  IsString,
  IsUppercase,
  Length,
  MinLength,
} from 'class-validator';

export class CreatePaisDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nome: string;

  @IsString()
  @Length(3, 3)
  @IsUppercase()
  sigla: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  ddi: string;
}
