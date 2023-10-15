import { PartialType } from '@nestjs/swagger';
import { CreateIndiponibilidadeDto } from './create-indiponibilidade.dto';

export class UpdateIndiponibilidadeDto extends PartialType(CreateIndiponibilidadeDto) {}
