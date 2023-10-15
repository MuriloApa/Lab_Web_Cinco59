import { Module } from '@nestjs/common';
import { ServidorService } from './servidor.service';
import { ServidorController } from './servidor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servidor } from './entities/servidor.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Email } from 'src/email/entities/email.entity';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import { EnderecoModule } from 'src/endereco/endereco.module';
import { EmailModule } from 'src/email/email.module';
import { TelefoneModule } from 'src/telefone/telefone.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Servidor, Endereco, Email, Telefone]),
    EnderecoModule,
    EmailModule,
    TelefoneModule,
  ],
  controllers: [ServidorController],
  providers: [ServidorService],
})
export class ServidorModule {}
