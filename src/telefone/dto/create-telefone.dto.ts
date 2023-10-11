import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { TipoTelefone } from '../entities/telefone.entity';

export class CreateTelefoneDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  numero: string;

  @IsEnum(TipoTelefone)
  @IsNotEmpty()
  tipo: string;
}
