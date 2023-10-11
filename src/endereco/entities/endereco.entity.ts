import { Municipio } from 'src/municipio/entities/municipio.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum TipoEndereco {
  RESIDENCIAL = 'Residencial',
  UNIDADE = 'Unidade',
}

@Entity()
export class Endereco extends BaseEntity {
  @Column()
  CEP: string;

  @Column()
  logradouro: string;

  @Column({ nullable: true })
  numero: number;

  @Column()
  bairro: string;

  @Column({ nullable: true })
  observacao: string;

  @ManyToOne(() => Municipio, { eager: true })
  municipio: Municipio;

  @Column({
    type: 'varchar',
    enum: TipoEndereco,
    default: TipoEndereco.RESIDENCIAL,
  })
  tipo: TipoEndereco;
}
