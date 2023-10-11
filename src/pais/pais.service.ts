import { Injectable } from '@nestjs/common';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pais } from './entities/pais.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { RecordnotfoundException } from '@exceptions';

@Injectable()
export class PaisService {
  constructor(
    @InjectRepository(Pais) private readonly repository: Repository<Pais>,
  ) {}

  create(createPaisDto: CreatePaisDto): Promise<Pais> {
    const pais = this.repository.create(createPaisDto);
    return this.repository.save(pais);
  }

  findAll(
    options: IPaginationOptions,
    search?: string,
  ): Promise<Pagination<Pais>> {
    const where: FindManyOptions<Pais> = {};

    if (search) {
      where.where = [{ nome: ILike(`%${search}%`) }];
    }

    return paginate<Pais>(this.repository, options, where);
  }

  async findOne(id: number): Promise<Pais> {
    const pais = await this.repository.findOneBy({ id });

    if (!pais) {
      throw new RecordnotfoundException();
    }

    return pais;
  }

  async update(id: number, updatePaisDto: UpdatePaisDto): Promise<Pais> {
    await this.repository.update(id, updatePaisDto);

    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const pais = await this.repository.delete(id);

    if (!pais?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }
}
