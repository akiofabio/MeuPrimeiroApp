import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/UsersRepository";
import { instanceToPlain } from "class-transformer";

class ListUsersService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();

    return instanceToPlain(users);
  }
}

export { ListUsersService };

