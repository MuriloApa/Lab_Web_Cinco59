import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CreatePessoaFisicaDto } from 'src/pessoa-fisica/dto/create-pessoa-fisica.dto';

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
}
