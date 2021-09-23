import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";

export class ListCharsByUserService {
  async execute(userId: string) {
    const userRepositories = getCustomRepository(UserRepositories);

    console.log(userId);

    const chars = await userRepositories.find({
      where: { id: userId },
      relations: ["chars"],
    });

    if (chars.length === 0) throw new Error("User doesn't have char");

    return chars;
  }
}
