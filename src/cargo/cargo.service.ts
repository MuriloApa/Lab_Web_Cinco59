import { Injectable } from '@nestjs/common';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cargo } from './entities/cargo.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { RecordnotfoundException } from '@exceptions';

@Injectable()
export class CargoService {
  constructor(
    @InjectRepository(Cargo) private readonly repository: Repository<Cargo>,
  ) {}

  async create(createCargoDto: CreateCargoDto): Promise<Cargo> {
    const cargo = await this.repository.create(createCargoDto);
    return this.repository.save(cargo);
  }

  findAll(
    options: IPaginationOptions,
    search?: string,
  ): Promise<Pagination<Cargo>> {
    const where: FindManyOptions<Cargo> = {};
    
    if (search) {
      where.where = [{ nome: ILike(`%${search}%`) }];
    }

    return paginate<Cargo>(this.repository, options, where);
  }

  findAllForced(options: IPaginationOptions): Promise<Pagination<Cargo>> {
    const resultado = this.repository
      .createQueryBuilder('cargo')
      .orderBy('cargo.ordenacaoForcada', 'ASC');

    return paginate<Cargo>(resultado, options);
  }

  async findOne(id: number): Promise<Cargo> {
    const cargo = await this.repository.findOneBy({ id });
    
    if (!cargo) {
      throw new RecordnotfoundException();
    }

    return cargo;
  }

  async update(id: number, updateCargoDto: UpdateCargoDto): Promise<Cargo> {
    await this.repository.update(id, updateCargoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const cargo = await this.repository.delete(id);

    if (!cargo?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }
}
