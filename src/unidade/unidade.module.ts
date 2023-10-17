import { Module } from '@nestjs/common';
import { UnidadeService } from './unidade.service';
import { UnidadeController } from './unidade.controller';
import { EnderecoModule } from 'src/endereco/endereco.module';
import { EmailModule } from 'src/email/email.module';
import { TelefoneModule } from 'src/telefone/telefone.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unidade } from './entities/unidade.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Email } from 'src/email/entities/email.entity';
import { Telefone } from 'src/telefone/entities/telefone.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Unidade, Endereco, Email, Telefone]),
    EnderecoModule,
    EmailModule,
    TelefoneModule,
  ],
  controllers: [UnidadeController],
  providers: [UnidadeService],
})
export class UnidadeModule {}
