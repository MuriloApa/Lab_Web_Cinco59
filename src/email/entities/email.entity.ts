import { PessoaFisica } from 'src/pessoa-fisica/entities/pessoa-fisica.entity';
import { Servidor } from 'src/servidor/entities/servidor.entity';
import { BaseEntity } from 'src/shared/entities';
import { Terceirizado } from 'src/terceirizado/entities/terceirizado.entity';
import { Unidade } from 'src/unidade/entities/unidade.entity';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';

export enum TipoEmail {
  PROFISSIONAL = 'Profissional',
  PESSOAL = 'Pessoal',
  UNIDADE = 'Unidade',
}

@Entity()
@Unique(['endereco'])
export class Email extends BaseEntity {
  @Column()
  endereco: string;

  @Column('text', {
    array: true,
    nullable: true,
    transformer: {
      to: (objeto: any[]) => JSON.stringify(objeto),
      from: (texto_json: string) => JSON.parse(texto_json),
    },
  })
  usuarios_unidade?: PessoaFisica[];

  @Column({ type: 'varchar', enum: TipoEmail, default: TipoEmail.PROFISSIONAL })
  tipo: TipoEmail;

  @ManyToOne(() => Terceirizado, { nullable: true, onDelete: 'CASCADE' })
  proprietarioTerceirizado: Terceirizado;

  @ManyToOne(() => Servidor, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  proprietarioServidor: Servidor;

  @ManyToOne(() => Unidade, { nullable: true, onDelete: 'CASCADE' })
  unidade: Unidade;
}
