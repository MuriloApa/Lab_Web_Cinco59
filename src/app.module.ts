import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneroModule } from './genero/genero.module';
import { EmailModule } from './email/email.module';
import { CargoModule } from './cargo/cargo.module';
import { PaisModule } from './pais/pais.module';
import { EstadoModule } from './estado/estado.module';
import { MunicipioModule } from './municipio/municipio.module';
import { EnderecoModule } from './endereco/endereco.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServidorModule } from './servidor/servidor.module';
import { TerceirizadoModule } from './terceirizado/terceirizado.module';
import { PessoaFisicaModule } from './pessoa-fisica/pessoa-fisica.module';
import { TelefoneModule } from './telefone/telefone.module';
import { UnidadeModule } from './unidade/unidade.module';
import { FuncaoModule } from './funcao/funcao.module';

@Module({
  imports: [
    GeneroModule,
    EmailModule,
    CargoModule,
    PaisModule,
    EstadoModule,
    MunicipioModule,
    EnderecoModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/banco.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ServidorModule,
    TerceirizadoModule,
    PessoaFisicaModule,
    TelefoneModule,
    UnidadeModule,
    FuncaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
