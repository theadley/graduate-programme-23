import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string; // bad lol - use bcrypt to hash and salt
}

export type UserAuthDetails = Pick<User, 'id' | 'name'>;

@Injectable()
export class UsersService {
  // This is our fake db.users table
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Tim',
      username: 'bigbrain',
      password: 'security'
    },
    {
      id: 2,
      name: 'Jonno',
      username: 'muffinman',
      password: 'raisins'
    }
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

}
