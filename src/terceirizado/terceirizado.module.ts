import { Module } from '@nestjs/common';
import { TerceirizadoService } from './terceirizado.service';
import { TerceirizadoController } from './terceirizado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Terceirizado } from './entities/terceirizado.entity';
import { EnderecoModule } from 'src/endereco/endereco.module';
import { EmailModule } from 'src/email/email.module';
import { TelefoneModule } from 'src/telefone/telefone.module';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Email } from 'src/email/entities/email.entity';
import { Telefone } from 'src/telefone/entities/telefone.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Terceirizado, Endereco, Email, Telefone]),
    EnderecoModule,
    EmailModule,
    TelefoneModule,
  ],
  controllers: [TerceirizadoController],
  providers: [TerceirizadoService],
})
export class TerceirizadoModule {}
