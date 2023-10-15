import { Injectable } from '@nestjs/common';
import { CreateFuncaoDto } from './dto/create-funcao.dto';
import { UpdateFuncaoDto } from './dto/update-funcao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Funcao } from './entities/funcao.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { RecordnotfoundException } from '@exceptions';

@Injectable()
export class FuncaoService {
  constructor(
    @InjectRepository(Funcao) private readonly repository: Repository<Funcao>,
  ) {}

  async create(createFuncaoDto: CreateFuncaoDto): Promise<Funcao> {
    const funcao = this.repository.create(createFuncaoDto);
    return await this.repository.save(funcao);
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<Funcao>> {
    const where: FindManyOptions<Funcao> = {};

    if (search) {
      where.where = [{ nome: ILike(`%${search}%`) }];
    }

    return paginate<Funcao>(this.repository, options, where);
  }

  findOne(id: number): Promise<Funcao> {
    const funcao = this.repository.findOneBy({ id });

    if (!funcao) {
      throw new RecordnotfoundException();
    }

    return funcao;
  }

  async update(id: number, updateFuncaoDto: UpdateFuncaoDto): Promise<Funcao> {
    await this.repository.update(id, updateFuncaoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const funcao = await this.repository.delete(id);

    if (!funcao?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }
}
