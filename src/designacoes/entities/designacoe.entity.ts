import { Funcao } from 'src/funcao/entities/funcao.entity';
import { Servidor } from 'src/servidor/entities/servidor.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Designacoe extends BaseEntity {
  @ManyToOne(() => Servidor, { eager: true })
  servidor: Servidor;

  @ManyToOne(() => Funcao, { eager: true })
  funcao: Funcao;

  @Column()
  dataDesignacao: Date;

  @Column()
  documento: string;

  @Column()
  numDocumento: number;

  @Column()
  anoDocumento: number;

  @Column()
  processoSei: string;

  @Column()
  documentoSei: number;

  @Column()
  dataDispensa: Date;
}
