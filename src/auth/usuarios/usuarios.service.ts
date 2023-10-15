import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { RecordnotfoundException } from '@exceptions';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private readonly repository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.repository.create(createUsuarioDto);
    const { senha, ...resultado } = await this.repository.save(usuario);

    return resultado as Usuario;
  }

  findAll(
    options: IPaginationOptions,
    search: string,
  ): Promise<Pagination<Usuario>> {
    const where: FindManyOptions<Usuario> = {};
    if (search) {
      where.where = [{ pessoa: ILike(`%${search}%`) }];
    }

    return paginate<Usuario>(this.repository, options, where);
  }

  async findByEmail(
    email: string,
    senhaInclusa: boolean = false,
  ): Promise<Usuario> {
    const usuario = await this.repository
      .createQueryBuilder('usuario')
      .addSelect('usuario.senha')
      .where('usuario.email = :email', { email })
      .getOne();

    if (senhaInclusa) {
      return usuario;
    } else {
      const { senha, ...result } = usuario;
      return result as Usuario;
    }
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = this.repository.findOneBy({ id });

    if (!usuario) {
      throw new RecordnotfoundException();
    }

    return usuario;
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    await this.repository.update(id, updateUsuarioDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const usuario = await this.repository.delete(id);

    if (!usuario?.affected) {
      throw new RecordnotfoundException();
    }

    return true;
  }

  async usuario_padrao() {
    const usuarioDto: CreateUsuarioDto = {
      email: 'admin@admin.com',
      senha: '@admin123.',
    };

    const existe = await this.repository.findOneBy({ email: usuarioDto.email });

    if (!existe) {
      const usuario = this.repository.create(usuarioDto);
      await this.repository.save(usuario);
    }
  }
}
