import { Column, Entity } from 'typeorm';

export enum TipoTelefone {
  PESSOAL = 'Pessoal',
  PROFISSIONAL = 'Profissional',
  FUNCIONAL = 'Funcional',
  UNIDADE = 'Unidade',
}

@Entity()
export class Telefone {
  @Column()
  numero: string;

  @Column({
    type: 'varchar',
    enum: TipoTelefone,
    default: TipoTelefone.PESSOAL,
  })
  tipo: TipoTelefone;
}
