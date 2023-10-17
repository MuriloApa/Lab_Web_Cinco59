import { hashSync } from 'bcrypt';
import { PessoaFisica } from 'src/pessoa-fisica/entities/pessoa-fisica.entity';
import { BaseEntity } from 'src/shared/entities';
import { Role } from 'src/shared/enums/roles.enum';
import { BeforeInsert, Column, Entity, OneToOne } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @OneToOne(() => PessoaFisica)
  pessoaAssociada: PessoaFisica;

  @Column('int', {
    array: true,
    nullable: true,
    transformer: {
      to: (objeto: any[]) => JSON.stringify(objeto),
      from: (texto_json: string) => JSON.parse(texto_json),
    },
  })
  roles: Role[];

  @BeforeInsert()
  hassPassword() {
    this.password = hashSync(this.password, 10);
  }
}
