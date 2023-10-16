import { PartialType } from '@nestjs/swagger';
import { CreateDesignacoeDto } from './create-designacoe.dto';

export class UpdateDesignacoeDto extends PartialType(CreateDesignacoeDto) {}
