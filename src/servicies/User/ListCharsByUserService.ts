
import { getCustomRepository } from 'typeorm';
import { CharRepositories } from '../../repositories/CharRepositories';

export class ListCharsByUserService {

  async execute(user_id: string) {
    const charRepositories = getCustomRepository(CharRepositories)

    const chars = await charRepositories.find({where: {own: user_id}})

    return chars

  }
}