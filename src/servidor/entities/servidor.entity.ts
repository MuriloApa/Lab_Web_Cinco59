import { Email } from 'src/email/entities/email.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { PessoaFisica } from 'src/pessoa-fisica/entities/pessoa-fisica.entity';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import { Terceirizado } from 'src/terceirizado/entities/terceirizado.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

export enum TipoClasse {
  CLASSE_ESPECIAL = 'Classe especial',
  PRIMEIRA_CLASSE = 'Primeira classe',
  SEGUNDA_CLASSE = 'Segunda classe',
  TERCEIRA_CLASSE = 'Terceira classe',
}

@Entity()
@Tree('closure-table')
export class Servidor extends PessoaFisica {
  @Column()
  siape: number;

  @Column()
  matricula: number;

  @Column()
  dataPosse: Date;

  @Column({ type: 'varchar', enum: TipoClasse })
  classe: TipoClasse;

  @Column()
  nomeDeGuerra: string;

  @Column()
  ativo: boolean;

  @TreeParent()
  chefe: Servidor;

  @TreeChildren()
  servidoresSubordinados: Servidor[];

  @OneToMany(() => Terceirizado, (terceirizado) => terceirizado.supervisor)
  terceirizadosSubordinados: Terceirizado[];

  @ManyToMany(() => Telefone, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'telefones_servidores' })
  telefones?: Telefone[];

  @ManyToMany(() => Endereco, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'enderecos_servidores' })
  enderecos?: Endereco[];

  @OneToMany(() => Email, (email) => email.proprietarioServidor, {
    eager: true,
  })
  emails?: Email[];
}
