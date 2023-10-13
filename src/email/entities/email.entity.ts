import { PessoaFisica } from 'src/pessoa-fisica/entities/pessoa-fisica.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum TipoEmail {
  PROFISSIONAL = 'Profissional',
  PESSOAL = 'Pessoal',
  UNIDADE = 'Unidade',
}

@Entity()
export class Email extends BaseEntity {
  @Column()
  endereco: string;

  @Column()
  usuarios_unidade?: PessoaFisica[];

  @Column({ type: 'varchar', enum: TipoEmail, default: TipoEmail.PROFISSIONAL })
  tipo: TipoEmail;

  @ManyToOne(() => PessoaFisica)
  proprietario: PessoaFisica;
}
