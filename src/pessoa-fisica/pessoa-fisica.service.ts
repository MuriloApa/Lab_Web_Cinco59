import { Injectable } from '@nestjs/common';
import { CreatePessoaFisicaDto } from './dto/create-pessoa-fisica.dto';
import { UpdatePessoaFisicaDto } from './dto/update-pessoa-fisica.dto';

@Injectable()
export class PessoaFisicaService {
  create(createPessoaFisicaDto: CreatePessoaFisicaDto) {
    return 'This action adds a new pessoaFisica';
  }

  findAll() {
    return `This action returns all pessoaFisica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pessoaFisica`;
  }

  update(id: number, updatePessoaFisicaDto: UpdatePessoaFisicaDto) {
    return `This action updates a #${id} pessoaFisica`;
  }

  remove(id: number) {
    return `This action removes a #${id} pessoaFisica`;
  }
}
