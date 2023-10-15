import { Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['nome'])
export class Indiponibilidade {
  @Column()
  nome: string;
}
