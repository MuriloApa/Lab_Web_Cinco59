import { Pais } from 'src/pais/entities/pais.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';

@Entity()
@Unique(['nome', 'pais'])
export class Estado extends BaseEntity {
  @Column()
  nome: string;

  @Column({ unique: true, length: 2 })
  sigla: string;

  /* Haverá uma tabela para regiões? */
  @Column()
  regiao: string;

  @ManyToOne(() => Pais, { eager: true })
  pais: Pais;
}
