import { hashSync } from 'bcrypt';
import { PessoaFisica } from 'src/pessoa-fisica/entities/pessoa-fisica.entity';
import { BaseEntity } from 'src/shared/entities';
import { BeforeInsert, Column, Entity, OneToOne } from 'typeorm';

@Entity()
export class Usuario extends BaseEntity {
  @Column()
  email: string;

  @Column({ select: false })
  senha?: string;

  @OneToOne(() => PessoaFisica, { nullable: true })
  pessoa?: PessoaFisica;

  @BeforeInsert()
  hashSenha() {
    this.senha = hashSync(this.senha, 10);
  }
}
