import { PessoaFisica } from 'src/pessoa-fisica/entities/pessoa-fisica.entity';
import { Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['matricula', 'contrato', 'empresa'])
export class Terceirizado extends PessoaFisica {
  @Column()
  matricula: number;

  @Column()
  contrato: string;

  @Column()
  empresa: string;

  @Column()
  ativo: boolean;
}
