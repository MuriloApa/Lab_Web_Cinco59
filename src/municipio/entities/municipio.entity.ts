import { Estado } from 'src/estado/entities/estado.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';

@Entity()
@Unique(['nome', 'estado'])
export class Municipio extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  sigla: string;

  @Column()
  ddd: string;

  @Column()
  regiao: string;

  @ManyToOne(() => Estado, { eager: true })
  estado: Estado;
}
