import { Injectable } from '@nestjs/common';
import { CreateAfastamentoDto } from './dto/create-afastamento.dto';
import { UpdateAfastamentoDto } from './dto/update-afastamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Afastamento } from './entities/afastamento.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { RecordnotfoundException } from '@exceptions';

@Injectable()
export class AfastamentosService {
  constructor(
    @InjectRepository(Afastamento)
    private readonly repository: Repository<Afastamento>,
  ) {}

  async create(
    createAfastamentoDto: CreateAfastamentoDto,
  ): Promise<Afastamento> {
    const afastamento = this.repository.create(createAfastamentoDto);
    return await this.repository.save(afastamento);
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<Afastamento>> {
    const where: FindManyOptions<Afastamento> = {};

    if (search) {
      where.where = [
        { servidor: ILike(`%${search}%`) },
        { indisponibilidade: ILike(`%${search}%`) },
      ];
    }

    return paginate<Afastamento>(this.repository, options, where);
  }

  find_per_period(
    options: IPaginationOptions,
    dataInicial: Date,
    dataFinal: Date,
  ): Promise<Pagination<Afastamento>> {
    const afastados = this.repository
      .createQueryBuilder('afastamento')
      .where(
        `DATE('afastamento'.'dataInicio', '+' || 'afastamento'.'duracao' || ' days') BETWEEN :dataInicial AND :dataFinal`,
        {
          dataInicial,
          dataFinal,
        },
      );

    return paginate<Afastamento>(afastados, options);
  }

  async findOne(id: number): Promise<Afastamento> {
    const afastamento = await this.repository.findOneBy({ id });

    if (!afastamento) {
      throw new RecordnotfoundException();
    }

    return afastamento;
  }

  async update(
    id: number,
    updateAfastamentoDto: UpdateAfastamentoDto,
  ): Promise<Afastamento> {
    await this.repository.update(id, updateAfastamentoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const afastamento = await this.repository.delete(id);

    if (!afastamento?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }
}
