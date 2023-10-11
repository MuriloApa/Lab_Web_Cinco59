import { Injectable } from '@nestjs/common';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import { Municipio } from './entities/municipio.entity';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { RecordnotfoundException } from '@exceptions';

@Injectable()
export class MunicipioService {
  constructor(
    @InjectRepository(Municipio)
    private readonly repository: Repository<Municipio>,
  ) {}

  create(createMunicipioDto: CreateMunicipioDto): Promise<Municipio> {
    const municipio = this.repository.create(createMunicipioDto);
    return this.repository.save(municipio);
  }

  findAll(
    options: IPaginationOptions,
    search?: string,
  ): Promise<Pagination<Municipio>> {
    const where: FindManyOptions<Municipio> = {};

    if (search) {
      where.where = [{ nome: ILike(`%${search}%`) }];
    }

    return paginate<Municipio>(this.repository, options, where);
  }

  async findOne(id: number): Promise<Municipio> {
    const municipio = await this.repository.findOneBy({ id });

    if (!municipio) {
      throw new RecordnotfoundException();
    }

    return municipio;
  }

  async update(
    id: number,
    updateMunicipioDto: UpdateMunicipioDto,
  ): Promise<Municipio> {
    await this.repository.update(id, updateMunicipioDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const municipio = await this.repository.delete(id);

    if (!municipio?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }
}
