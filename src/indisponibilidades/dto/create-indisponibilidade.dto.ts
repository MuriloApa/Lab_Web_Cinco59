import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateIndisponibilidadeDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nome: string;
}
