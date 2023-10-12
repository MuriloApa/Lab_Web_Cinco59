import { Module } from '@nestjs/common';
import { EnderecoModule } from 'src/endereco/endereco.module';
import { TelefoneModule } from 'src/telefone/telefone.module';

@Module({
  imports: [EnderecoModule, TelefoneModule],
})
export class PessoaFisicaModule {}
