import { Module } from '@nestjs/common';
import { DesignacoesService } from './designacoes.service';
import { DesignacoesController } from './designacoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Designacoe } from './entities/designacoe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Designacoe])],
  controllers: [DesignacoesController],
  providers: [DesignacoesService],
})
export class DesignacoesModule {}
