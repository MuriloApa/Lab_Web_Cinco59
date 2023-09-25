import { Injectable } from '@nestjs/common';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';

@Injectable()
export class ServidorService {
  create(createServidorDto: CreateServidorDto) {
    return 'This action adds a new servidor';
  }

  findAll() {
    return `This action returns all servidor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} servidor`;
  }

  update(id: number, updateServidorDto: UpdateServidorDto) {
    return `This action updates a #${id} servidor`;
  }

  remove(id: number) {
    return `This action removes a #${id} servidor`;
  }
}
