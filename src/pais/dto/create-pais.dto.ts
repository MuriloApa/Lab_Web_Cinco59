import { IsNotEmpty, IsString, IsUppercase, MinLength } from 'class-validator';

export class CreatePaisDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nome: string;

  @IsString()
  @MinLength(2)
  @IsUppercase()
  sigla: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  ddi: string;
}
