import { Email } from 'src/email/entities/email.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { BaseEntity } from 'src/shared/entities';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

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

  @OneToMany(() => Telefone, (telefone) => telefone.unidade, { eager: true })
  telefones?: Telefone[];

  @ManyToOne(() => Endereco, { eager: true })
  endereco: Endereco;

  @OneToOne(() => Email)
  email: Email;
}
