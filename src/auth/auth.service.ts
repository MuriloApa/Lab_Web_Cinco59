import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';

import { UserToken } from './models/user-token.model';
import { UserPayload } from './models/user-payload.model';
import { User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usuariosService.findByEmail(email, true);

    if (user) {
      const isPasswordValid = await compareSync(password, user.password);

      if (isPasswordValid) {
        const { password, ...result } = user;
        return result as User;
      }
    }

    return null;
  }

  async login(user: User): Promise<UserToken> {
    const playload: UserPayload = {
      sub: user.id,
      email: user.email,
    };

    return {
      access_token: this.jwtService.sign(playload),
      token_type: 'Bearer',
    };
  }
}
