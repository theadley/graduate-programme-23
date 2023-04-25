import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserAuthDetails, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, password: string): Promise<UserAuthDetails> {
    const user = await this.usersService.findOne(username);
    console.log(user);
    if (user?.password === password) {
      // const {password, username, ...rest} = user;
      return { id: user.id, name: user.name };
    }
    console.log('Big oof')
    return null;
  }

  login(user: UserAuthDetails): { access_token: string } {
    const payload = {
      name: user.name,
      sub: user.id
    };

    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
