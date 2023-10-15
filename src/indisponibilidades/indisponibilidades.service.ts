import { Injectable } from '@nestjs/common';
import { CreateIndisponibilidadeDto } from './dto/create-indisponibilidade.dto';
import { UpdateIndisponibilidadeDto } from './dto/update-indisponibilidade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Indisponibilidade } from './entities/indisponibilidade.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { RecordnotfoundException } from '@exceptions';

@Injectable()
export class IndisponibilidadesService {
  constructor(
    @InjectRepository(Indisponibilidade)
    private readonly repository: Repository<Indisponibilidade>,
  ) {}

  async create(
    createIndisponibilidadeDto: CreateIndisponibilidadeDto,
  ): Promise<Indisponibilidade> {
    const indisponibilidade = this.repository.create(
      createIndisponibilidadeDto,
    );
    return await this.repository.save(indisponibilidade);
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<Indisponibilidade>> {
    const where: FindManyOptions<Indisponibilidade> = {};

    if (search) {
      where.where = [{ nome: ILike(`%${search}%`) }];
    }

    return paginate<Indisponibilidade>(this.repository, options, where);
  }

  async findOne(id: number): Promise<Indisponibilidade> {
    const indisponibilidade = await this.repository.findOneBy({ id });

    if (!indisponibilidade) {
      throw new RecordnotfoundException();
    }

    return indisponibilidade;
  }

  async update(
    id: number,
    updateIndisponibilidadeDto: UpdateIndisponibilidadeDto,
  ): Promise<Indisponibilidade> {
    await this.repository.update(id, updateIndisponibilidadeDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const indisponibilidade = await this.repository.delete(id);

    if (!indisponibilidade?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }
}
