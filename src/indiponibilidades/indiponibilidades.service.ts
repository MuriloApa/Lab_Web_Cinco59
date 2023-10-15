import { Injectable } from '@nestjs/common';
import { CreateIndiponibilidadeDto } from './dto/create-indiponibilidade.dto';
import { UpdateIndiponibilidadeDto } from './dto/update-indiponibilidade.dto';

@Injectable()
export class IndiponibilidadesService {
  create(createIndiponibilidadeDto: CreateIndiponibilidadeDto) {
    return 'This action adds a new indiponibilidade';
  }

  findAll() {
    return `This action returns all indiponibilidades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} indiponibilidade`;
  }

  update(id: number, updateIndiponibilidadeDto: UpdateIndiponibilidadeDto) {
    return `This action updates a #${id} indiponibilidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} indiponibilidade`;
  }
}
