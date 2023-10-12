import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { RecordnotfoundException } from '@exceptions';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(Genero) private readonly repository: Repository<Genero>,
  ) {}

  async create(createGeneroDto: CreateGeneroDto): Promise<Genero> {
    const genero = await this.repository.create(createGeneroDto);
    return this.repository.save(genero);
  }

  findAll(
    options: IPaginationOptions,
    search?: string,
  ): Promise<Pagination<Genero>> {
    const where: FindManyOptions<Genero> = {};

    if (search) {
      where.where = [{ nome: ILike(`%${search}%`) }];
    }

    return paginate<Genero>(this.repository, options, where);
  }

  async findOne(id: number): Promise<Genero> {
    const genero = await this.repository.findOneBy({ id });

    if (!genero) {
      throw new RecordnotfoundException();
    }

    return genero;
  }

  async update(id: number, updateGeneroDto: UpdateGeneroDto): Promise<Genero> {
    await this.repository.update(id, updateGeneroDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const genero = await this.repository.delete(id);

    if (!genero?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }
}
