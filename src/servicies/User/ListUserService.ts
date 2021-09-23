import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";

export class ListUserService {
  async execute() {
    const userRepository = getCustomRepository(UserRepositories);

    const users = await userRepository.find();

    return users;
  }
}
