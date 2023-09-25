import { Module } from '@nestjs/common';
import { TerceirizadoService } from './terceirizado.service';
import { TerceirizadoController } from './terceirizado.controller';

@Module({
  controllers: [TerceirizadoController],
  providers: [TerceirizadoService],
})
export class TerceirizadoModule {}
