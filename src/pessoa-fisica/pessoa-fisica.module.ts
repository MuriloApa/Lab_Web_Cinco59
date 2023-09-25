import { Module } from '@nestjs/common';
import { PessoaFisicaService } from './pessoa-fisica.service';
import { PessoaFisicaController } from './pessoa-fisica.controller';

@Module({
  controllers: [PessoaFisicaController],
  providers: [PessoaFisicaService],
})
export class PessoaFisicaModule {}
