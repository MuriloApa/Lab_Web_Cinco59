import { Injectable } from '@nestjs/common';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Servidor } from './entities/servidor.entity';
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
export class ServidorService {
  constructor(
    @InjectRepository(Servidor)
    private readonly repository: Repository<Servidor>,
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,
    @InjectRepository(Telefone)
    private readonly telefoneRepository: Repository<Telefone>,
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
  ) {}

  async create(createServidorDto: CreateServidorDto): Promise<Servidor> {
    const servidor = await this.repository.create(createServidorDto);

    servidor.enderecos = [];
    createServidorDto.enderecos?.forEach((endereco) => {
      servidor.enderecos.push(this.enderecoRepository.create(endereco));
    });

    servidor.telefones = [];
    createServidorDto.telefones?.forEach((telefone) => {
      servidor.telefones.push(this.telefoneRepository.create(telefone));
    });

    /* servidor.emails = [];
    createServidorDto.emails?.forEach((email) => {
      const e_mail = this.emailRepository.create(email);
      servidor.emails.push(e_mail);
      this.emailRepository.save(e_mail);
    }); */

    const proprietario = await this.repository.save(servidor);
    proprietario.emails.forEach((email) => {
      this.emailRepository.update(
        { endereco: email.endereco },
        { proprietarioServidor: proprietario },
      );
    });

    const { servidoresSubordinados, ...aux } = servidor;

    const novoServidor = await this.repository.save(aux);
    servidoresSubordinados.forEach((item) => {
      this.repository.update({ id: item.id }, { chefe: novoServidor });
    });

    await this.repository.update(
      { id: novoServidor.id },
      { servidoresSubordinados },
    );

    return novoServidor;
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<Servidor>> {
    const where: FindManyOptions<Servidor> = {};

    if (search) {
      where.where = [
        { nome: ILike(`%${search}%`) },
        { nomeDeGuerra: ILike(`%${search}%`) },
      ];
    }

    return paginate<Servidor>(this.repository, options, where);
  }

  async findOne(id: number): Promise<Servidor> {
    const servidor = await this.repository.findOneBy({ id });

    if (!servidor) {
      throw new RecordnotfoundException();
    }

    return servidor;
  }

  async update(
    id: number,
    updateServidorDto: UpdateServidorDto,
  ): Promise<Servidor> {
    await this.repository.update(id, updateServidorDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    /* await this.repository
      .createQueryBuilder('auxiliar')
      .delete()
      .from('enderecos_servidores')
      .where('servidorId = :id', { id })
      .execute(); */
    const servidor = await this.repository.delete(id);

    if (!servidor?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }
}
