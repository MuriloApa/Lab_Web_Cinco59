import { BaseEntity } from 'src/shared/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class Pais extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  sigla: string;

  @Column()
  ddi: string;
}
