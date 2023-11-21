import { Injectable } from '@nestjs/common';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Unidade } from './entities/unidade.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import { Email } from 'src/email/entities/email.entity';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { RecordnotfoundException } from '@exceptions';

@Injectable()
export class UnidadeService {
  constructor(
    @InjectRepository(Unidade) private readonly repository: Repository<Unidade>,
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,
    @InjectRepository(Telefone)
    private readonly telefoneRepository: Repository<Telefone>,
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
  ) {}

  async create(createUnidadeDto: CreateUnidadeDto): Promise<Unidade> {
    const unidade = await this.repository.create(createUnidadeDto);

    unidade.telefones = [];
    createUnidadeDto.telefones.forEach((telefone) => {
      const telefone_salvar = this.telefoneRepository.create(telefone);
      unidade.telefones.push(telefone_salvar);
      this.telefoneRepository.save(telefone_salvar);
    });

    const endereco = this.enderecoRepository.create(createUnidadeDto.endereco);
    await this.enderecoRepository.save(endereco);
    unidade.endereco = endereco;

    unidade.email = this.emailRepository.create(createUnidadeDto.email);
    await this.emailRepository.save(unidade.email);

    const proprietario = await this.repository.save(unidade);
    proprietario.telefones.forEach((telefone) => {
      this.telefoneRepository.update(
        { numero: telefone.numero },
        { unidade: proprietario },
      );
    });

    return proprietario;
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<Unidade>> {
    const where: FindManyOptions<Unidade> = {};

    if (search) {
      where.where = [{ nome: ILike(`%${search}%`) }];
    }

    return paginate<Unidade>(this.repository, options, where);
  }

  findAllForced(options: IPaginationOptions): Promise<Pagination<Unidade>> {
    const resultado = this.repository
      .createQueryBuilder('unidade')
      .orderBy('unidade.ordenacaoForcada', 'ASC');

    return paginate<Unidade>(resultado, options);
  }

  async findOne(id: number): Promise<Unidade> {
    const unidade = await this.repository.findOneBy({ id });

    if (!unidade) {
      throw new RecordnotfoundException();
    }

    return unidade;
  }

  async update(
    id: number,
    updateUnidadeDto: UpdateUnidadeDto,
  ): Promise<Unidade> {
    await this.repository.update(id, updateUnidadeDto);

    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const aux = await this.repository.findOneBy({ id });

    aux.telefones.forEach(async (telefone) => {
      await this.telefoneRepository.delete(telefone.id);
    });

    await this.emailRepository.delete(aux.email.id);

    const unidade = await this.repository.delete(id);

    if (!unidade?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }
}
