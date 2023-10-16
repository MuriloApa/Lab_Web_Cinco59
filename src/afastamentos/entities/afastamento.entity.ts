import { Indisponibilidade } from 'src/indisponibilidades/entities/indisponibilidade.entity';
import { Servidor } from 'src/servidor/entities/servidor.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Afastamento extends BaseEntity {
  @ManyToOne(() => Servidor)
  servidor: Servidor;

  @ManyToOne(() => Indisponibilidade)
  indisponibilidade: Indisponibilidade;

  @Column()
  dataInicio: Date;

  @Column()
  duracao: number;

  @Column()
  exercicio: number;
}
