
import { getCustomRepository } from 'typeorm';
import { CharRepositories } from '../../repositories/CharRepositories';

export class ListCharService {
  async execute() {
    const charRepositories = getCustomRepository(CharRepositories)

    const chars = await charRepositories.find()

    return chars
  }
}