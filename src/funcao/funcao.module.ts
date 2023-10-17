import { Module } from '@nestjs/common';
import { FuncaoService } from './funcao.service';
import { FuncaoController } from './funcao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcao } from './entities/funcao.entity';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import { TelefoneModule } from 'src/telefone/telefone.module';

@Module({
  imports: [TypeOrmModule.forFeature([Funcao, Telefone]), TelefoneModule],
  controllers: [FuncaoController],
  providers: [FuncaoService],
})
export class FuncaoModule {}
