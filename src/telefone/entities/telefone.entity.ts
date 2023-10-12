import { BaseEntity } from 'src/shared/entities';
import { Column, Entity } from 'typeorm';

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
}
