import { Injectable } from '@nestjs/common';
import { CreateDesignacoeDto } from './dto/create-designacoe.dto';
import { UpdateDesignacoeDto } from './dto/update-designacoe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Designacoe } from './entities/designacoe.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { RecordnotfoundException } from '@exceptions';

@Injectable()
export class DesignacoesService {
  constructor(
    @InjectRepository(Designacoe)
    private readonly repository: Repository<Designacoe>,
  ) {}

  async create(createDesignacoeDto: CreateDesignacoeDto): Promise<Designacoe> {
    const designacao = this.repository.create(createDesignacoeDto);
    return await this.repository.save(designacao);
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<Designacoe>> {
    const where: FindManyOptions<Designacoe> = {};

    if (search) {
      where.where = [
        { servidor: ILike(`%${search}%`) },
        { funcao: ILike(`%${search}%`) },
      ];
    }

    return paginate<Designacoe>(this.repository, options, where);
  }

  async findOne(id: number): Promise<Designacoe> {
    const designacao = await this.repository.findOneBy({ id });

    if (!designacao) {
      throw new RecordnotfoundException();
    }

    return designacao;
  }

  async update(
    id: number,
    updateDesignacoeDto: UpdateDesignacoeDto,
  ): Promise<Designacoe> {
    await this.repository.update(id, updateDesignacoeDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const designacao = await this.repository.delete(id);

    if (!designacao?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }
}
