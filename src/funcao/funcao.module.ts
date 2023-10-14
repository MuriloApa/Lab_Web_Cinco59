import { Module } from '@nestjs/common';
import { FuncaoService } from './funcao.service';
import { FuncaoController } from './funcao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcao } from './entities/funcao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Funcao])],
  controllers: [FuncaoController],
  providers: [FuncaoService],
})
export class FuncaoModule {}
