import { Module } from '@nestjs/common';
import { PaisService } from './pais.service';
import { PaisController } from './pais.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pais } from './entities/pais.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pais])],
  controllers: [PaisController],
  providers: [PaisService],
})
export class PaisModule {}
