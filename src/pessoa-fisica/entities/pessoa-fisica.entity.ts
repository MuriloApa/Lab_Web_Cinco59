import { Cargo } from 'src/cargo/entities/cargo.entity';
import { Genero } from 'src/genero/entities/genero.entity';
import { BaseEntity } from 'src/shared/entities';
import { Unidade } from 'src/unidade/entities/unidade.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum TipoSanguineo {
  A_POSITIVO = 'A+',
  A_NEGATIVO = 'A-',
  B_POSITIVO = 'B+',
  B_NEGATIVO = 'B-',
  AB_POSITIVO = 'AB+',
  AB_NEGATIVO = 'AB-',
  O_POSITIVO = 'O+',
  O_NEGATIVO = 'O-',
}

export enum TipoSexo {
  MASCULINO = 'Masculino',
  FEMININO = 'Feminino',
  NAO_DECLARADO = 'Não declarado',
}

@Entity()
export class PessoaFisica extends BaseEntity {
  @Column()
  cpf: string;

  @Column()
  nome: string;

  @Column()
  dataNascimento: Date;

  @Column({ type: 'varchar', enum: TipoSexo })
  sexo: string;

  @ManyToOne(() => Genero, { eager: true })
  genero: Genero;

  @Column({ type: 'varchar', enum: TipoSanguineo, nullable: true })
  tipoSanguineo: string;

  @ManyToOne(() => Cargo, { eager: true })
  cargo: Cargo;

  @ManyToOne(() => Unidade, { eager: true })
  unidade: Unidade;
}
