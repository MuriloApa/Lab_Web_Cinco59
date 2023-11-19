import { BaseEntity } from 'src/shared/entities';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import { Column, Entity, JoinColumn, OneToOne, Unique } from 'typeorm';

@Entity()
@Unique(['nome'])
export class Funcao extends BaseEntity {
  @Column()
  nome: string;

  @Column({ nullable: true })
  sigla: string;

  @Column()
  exclusiva: boolean;

  @Column()
  ordenacaoForcada: number;

  @Column()
  ativa: boolean;

  @OneToOne(() => Telefone, { nullable: true, eager: true })
  @JoinColumn()
  telefone?: Telefone;
}
