import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async getUserById(id: string) {
    return this.usersRepo.findUnique({
      where: { id },
      select: {
        email: true,
        name: true,
      },
    });
  }
}
