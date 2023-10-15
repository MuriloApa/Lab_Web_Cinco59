import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['nome'])
export class Cargo extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  sigla: string;

  @Column()
  ordenacaoForcada: number;

  @Column({ default: true })
  ativo: boolean;
}
