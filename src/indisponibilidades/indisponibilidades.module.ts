import { Module } from '@nestjs/common';
import { IndisponibilidadesService } from './indisponibilidades.service';
import { IndisponibilidadesController } from './indisponibilidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Indisponibilidade } from './entities/indisponibilidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Indisponibilidade])],
  controllers: [IndisponibilidadesController],
  providers: [IndisponibilidadesService],
})
export class IndisponibilidadesModule {}
