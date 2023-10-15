import { Module } from '@nestjs/common';
import { IndiponibilidadesService } from './indiponibilidades.service';
import { IndiponibilidadesController } from './indiponibilidades.controller';

@Module({
  controllers: [IndiponibilidadesController],
  providers: [IndiponibilidadesService],
})
export class IndiponibilidadesModule {}
