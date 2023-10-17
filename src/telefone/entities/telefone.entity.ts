import { BaseEntity } from 'src/shared/entities';
import { Unidade } from 'src/unidade/entities/unidade.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum TipoTelefone {
  PESSOAL = 'Pessoal',
  PROFISSIONAL = 'Profissional',
  FUNCIONAL = 'Funcional',
  UNIDADE = 'Unidade',
}

@Entity()
export class Telefone extends BaseEntity {
  @Column()
  numero: string;

  @Column({
    type: 'varchar',
    enum: TipoTelefone,
    default: TipoTelefone.PESSOAL,
  })
  tipo: TipoTelefone;

  @ManyToOne(() => Unidade, { nullable: true })
  unidade: Unidade;
}
