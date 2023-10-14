import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['nome'])
export class Funcao extends BaseEntity {
  @Column()
  nome: string;

  @Column({ nullable: true })
  sigla: string;

  @Column()
  exclusiva: boolean;

  @Column({ nullable: true })
  ordenacaoForcada: number;
}
