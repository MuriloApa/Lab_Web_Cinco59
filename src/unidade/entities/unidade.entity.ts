import { Email } from 'src/email/entities/email.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { BaseEntity } from 'src/shared/entities';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity()
export class Unidade extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  sigla: string;

  @Column()
  formal: boolean;

  @ManyToOne(() => Unidade, { nullable: true })
  unidadeSuperiorImediata: Unidade;

  @Column()
  ordenacaoForcada: number;

  @ManyToMany(() => Telefone, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'telefones_terceirizado' })
  telefones?: Telefone[];

  @ManyToOne(() => Endereco, { eager: true })
  enderecos?: Endereco[];

  @OneToOne(() => Email)
  emails: Email;
}
