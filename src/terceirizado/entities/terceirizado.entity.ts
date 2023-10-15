import { Email } from 'src/email/entities/email.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { PessoaFisica } from 'src/pessoa-fisica/entities/pessoa-fisica.entity';
import { Servidor } from 'src/servidor/entities/servidor.entity';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['matricula', 'contrato', 'empresa'])
export class Terceirizado extends PessoaFisica {
  @Column()
  matricula: number;

  @Column()
  contrato: string;

  @Column()
  empresa: string;

  @Column()
  ativo: boolean;

  @ManyToMany(() => Telefone, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'telefones_terceirizado' })
  telefones?: Telefone[];

  @ManyToMany(() => Endereco, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'enderecos_terceirizado' })
  enderecos?: Endereco[];

  @OneToMany(() => Email, (email) => email.proprietarioTerceirizado, {
    eager: true,
  })
  emails?: Email[];

  @ManyToOne(() => Servidor)
  supervisor: Servidor;
}
