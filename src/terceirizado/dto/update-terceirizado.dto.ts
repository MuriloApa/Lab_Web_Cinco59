import { PartialType } from '@nestjs/swagger';
import { CreateTerceirizadoDto } from './create-terceirizado.dto';

export class UpdateTerceirizadoDto extends PartialType(CreateTerceirizadoDto) {}
