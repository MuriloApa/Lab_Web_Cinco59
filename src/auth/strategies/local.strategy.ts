import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { UnauthorizedException } from '@nestjs/common';

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  validate(email: string, password: string): Promise<Usuario> {
    const user = this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Endereço de email ou senha incorretos.');
    }

    return user;
  }
}
