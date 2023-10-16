import { Module } from '@nestjs/common';
import { AfastamentosService } from './afastamentos.service';
import { AfastamentosController } from './afastamentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Afastamento } from './entities/afastamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Afastamento])],
  controllers: [AfastamentosController],
  providers: [AfastamentosService],
})
export class AfastamentosModule {}
