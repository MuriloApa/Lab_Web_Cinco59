import { IsDate, IsString, Length, MinLength } from 'class-validator';

export class CreatePessoaFisicaDto {
  @IsString()
  @Length(11)
  cpf: string;

  @IsString()
  @MinLength(3)
  nome: string;

  @IsDate()
  dataNascimento: Date;

  @IsString()
  @MinLength(3)
  sexo: string;

  @IsString()
  @MinLength(3)
  genero: string;

  @IsString()
  @Length(2)
  tipoSanguineo: string;
}
