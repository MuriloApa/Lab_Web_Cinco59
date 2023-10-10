import { Injectable } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estado } from './entities/estado.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { RecordnotfoundException } from '@exceptions';

@Injectable()
export class EstadoService {
  constructor(
    @InjectRepository(Estado) private repository: Repository<Estado>,
  ) {}

  async create(createEstadoDto: CreateEstadoDto): Promise<Estado> {
    const estado = this.repository.create(createEstadoDto);
    return await this.repository.save(estado);
  }

  findAll(
    options: IPaginationOptions,
    search?: string,
  ): Promise<Pagination<Estado>> {
    const where: FindManyOptions<Estado> = {};

    if (search) {
      where.where = [
        { nome: ILike(`%${search}%`) },
        { sigla: ILike(`%${search}%`) },
      ];
    }

    return paginate<Estado>(this.repository, options, where);
  }

  async findOne(id: number): Promise<Estado> {
    const estado = await this.repository.findOneBy({ id });
    if (!estado) {
      throw new RecordnotfoundException();
    }

    return estado;
  }

  async update(id: number, updateEstadoDto: UpdateEstadoDto): Promise<Estado> {
    await this.repository.update(id, updateEstadoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const estado = await this.repository.delete(id);

    if (!estado?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }
}
