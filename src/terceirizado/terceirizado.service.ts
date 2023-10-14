import { Injectable } from '@nestjs/common';
import { CreateTerceirizadoDto } from './dto/create-terceirizado.dto';
import { UpdateTerceirizadoDto } from './dto/update-terceirizado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Terceirizado } from './entities/terceirizado.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { RecordnotfoundException } from '@exceptions';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import { Email } from 'src/email/entities/email.entity';

@Injectable()
export class TerceirizadoService {
  constructor(
    @InjectRepository(Terceirizado)
    private readonly repository: Repository<Terceirizado>,
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,
    @InjectRepository(Telefone)
    private readonly telefoneRepository: Repository<Telefone>,
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
  ) {}

  async create(
    createTerceirizadoDto: CreateTerceirizadoDto,
  ): Promise<Terceirizado> {
    const terceirizado = this.repository.create(createTerceirizadoDto);
    terceirizado.ativo = true;

    terceirizado.enderecos = [];
    createTerceirizadoDto.enderecos?.forEach((endereco) => {
      terceirizado.enderecos.push(this.enderecoRepository.create(endereco));
    });

    terceirizado.telefones = [];
    createTerceirizadoDto.telefones?.forEach((telefone) => {
      terceirizado.telefones.push(this.telefoneRepository.create(telefone));
    });

    terceirizado.emails = [];
    createTerceirizadoDto.emails?.forEach((email) => {
      const e_mail = this.emailRepository.create(email);
      terceirizado.emails.push(e_mail);
      this.emailRepository.save(e_mail);
    });

    const proprietario = await this.repository.save(terceirizado);
    proprietario.emails.forEach((email) => {
      this.emailRepository.update(
        { endereco: email.endereco },
        { proprietario: proprietario },
      );
    });
    return proprietario;
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<Terceirizado>> {
    const where: FindManyOptions = {};

    if (search) {
      where.where = [
        { nome: ILike(`%${search}%`) },
        { contrato: ILike(`%${search}%`) },
        { empresa: ILike(`%${search}%`) },
      ];
    }

    return paginate<Terceirizado>(this.repository, options, where);
  }

  async findOne(id: number): Promise<Terceirizado> {
    const terceirizado = await this.repository.findOneBy({ id });

    if (!terceirizado) {
      throw new RecordnotfoundException();
    }

    return terceirizado;
  }

  async update(
    id: number,
    updateTerceirizadoDto: UpdateTerceirizadoDto,
  ): Promise<Terceirizado> {
    await this.repository.update(id, updateTerceirizadoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const terceirizado = await this.repository.delete(id);

    if (!terceirizado?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }
}
