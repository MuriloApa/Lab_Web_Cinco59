import { Injectable } from '@nestjs/common';
import { UsuariosService } from './usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { Usuario } from './usuarios/entities/usuario.entity';
import { UserToken } from './models/user-token.model';
import { UserPayload } from './models/user-payload.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usuariosService.findByEmail(email, true);

    if (user) {
      const isPasswordValid = await compareSync(password, user.senha);

      if (isPasswordValid) {
        const { senha, ...result } = user;
        return result as Usuario;
      }
    }

    return null;
  }

  async login(user: Usuario): Promise<UserToken> {
    const playload: UserPayload = {
      sub: user.id,
      email: user.email,
      pessoa: user.pessoa,
    };

    return {
      access_token: this.jwtService.sign(playload),
      token_type: 'Bearer',
    };
  }
}
