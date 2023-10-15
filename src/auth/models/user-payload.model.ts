import { PessoaFisica } from 'src/pessoa-fisica/entities/pessoa-fisica.entity';

export interface UserPayload {
  sub: number;
  email: string;
  pessoa: PessoaFisica;
  iat?: number;
  exp?: number;
}
