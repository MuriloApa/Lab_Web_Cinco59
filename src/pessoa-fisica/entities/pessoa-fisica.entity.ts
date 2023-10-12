import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Genero } from 'src/genero/entities/genero.entity';
import { BaseEntity } from 'src/shared/entities';
import { Telefone } from 'src/telefone/entities/telefone.entity';
import { Column, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

export class PessoaFisica extends BaseEntity {
  @Column()
  cpf: string;

  @Column()
  nome: string;

  @Column()
  dataNascimento: Date;

  @Column()
  sexo: string;

  @ManyToOne(() => Genero, { eager: true })
  genero: Genero;

  @Column({ nullable: true })
  tipoSanguineo: string;

  @ManyToMany(() => Endereco, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'enderecos_pessoa_fisica' })
  enderecos?: Endereco[];

  @ManyToMany(() => Telefone, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'telefones_pessoa_fisica' })
  telefones?: Telefone[];
}
