import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private users = [
    {
      email: 'test@test.com',
      password: 'changeme',
    },
    {
      email: 'test@test.org',
      password: 'imbad',
    },
  ];

  constructor() {
    super({
      usernameField: 'email',
    });
  }

  validate(email: string, password: string) {
    const foundUser = this.users.find(user => user.email === email);
    if (foundUser.password !== password) {
      throw new BadRequestException('Incorrect Username or password');
    }
    return foundUser;
  }
}
