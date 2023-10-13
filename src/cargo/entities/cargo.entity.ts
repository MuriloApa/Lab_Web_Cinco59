import { PessoaFisica } from 'src/pessoa-fisica/entities/pessoa-fisica.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, OneToMany, Unique } from 'typeorm';

@Entity()
@Unique(['nome'])
export class Cargo extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  sigla: string;

  @Column()
  ordenacaoForcada: number;

  @OneToMany(() => PessoaFisica, (pessoa) => pessoa.cargo)
  pessoas: PessoaFisica[];
}
