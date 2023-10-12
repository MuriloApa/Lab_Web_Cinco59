import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['nome'])
export class Genero extends BaseEntity {
  @Column()
  nome: string;
}
