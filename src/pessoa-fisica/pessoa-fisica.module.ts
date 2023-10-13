import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';
import { EnderecoModule } from 'src/endereco/endereco.module';
import { TelefoneModule } from 'src/telefone/telefone.module';

@Module({
  imports: [EnderecoModule, TelefoneModule, EmailModule],
})
export class PessoaFisicaModule {}
