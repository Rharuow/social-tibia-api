
import { getCustomRepository } from 'typeorm';
import { RequirimentRepositories } from '../../repositories/RequirimentRepositories';

export class ListRequirimentsService {
  async execute() {
    const requirimentRepositories = getCustomRepository(RequirimentRepositories)

    const requiriments = requirimentRepositories.find()

    return requiriments    

  }
}