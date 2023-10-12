import { Module } from '@nestjs/common';
import { TelefoneService } from './telefone.service';

@Module({
  controllers: [],
  providers: [TelefoneService],
})
export class TelefoneModule {}
