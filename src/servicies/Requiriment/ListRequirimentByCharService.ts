
import { getCustomRepository } from 'typeorm';
import { RequirimentRepositories } from '../../repositories/RequirimentRepositories';

export class ListRequirimentByCharService {
  async execute(charId: string) {
    const requirimentRepositories = getCustomRepository(RequirimentRepositories)

    const requirimentsByChar = await requirimentRepositories.find({where: {charId}})

    if(requirimentsByChar.length === 0) throw new Error("The char doesn't was required")

    return requirimentsByChar
    
  }
}