import { PartialType } from '@nestjs/swagger';
import { CreatePessoaFisicaDto } from './create-pessoa-fisica.dto';

export class UpdatePessoaFisicaDto extends PartialType(CreatePessoaFisicaDto) {}
