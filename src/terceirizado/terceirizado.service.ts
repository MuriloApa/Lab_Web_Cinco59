import { Injectable } from '@nestjs/common';
import { CreateTerceirizadoDto } from './dto/create-terceirizado.dto';
import { UpdateTerceirizadoDto } from './dto/update-terceirizado.dto';

@Injectable()
export class TerceirizadoService {
  create(createTerceirizadoDto: CreateTerceirizadoDto) {
    return 'This action adds a new terceirizado';
  }

  findAll() {
    return `This action returns all terceirizado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} terceirizado`;
  }

  update(id: number, updateTerceirizadoDto: UpdateTerceirizadoDto) {
    return `This action updates a #${id} terceirizado`;
  }

  remove(id: number) {
    return `This action removes a #${id} terceirizado`;
  }
}
