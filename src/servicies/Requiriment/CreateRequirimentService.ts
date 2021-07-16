import { getCustomRepository } from "typeorm";
import { RequirimentRepositories } from "../../repositories/RequirimentRepositories";
import { CharRepositories } from '../../repositories/CharRepositories';


export class CreateRequirimentService {

    async execute(charId: string) {

        if(!charId) throw new Error("Add some char to create requiriments")

        const requirimentRepository = getCustomRepository(RequirimentRepositories)

        const charRepositories = getCustomRepository(CharRepositories)

        const char = await charRepositories.findOne(charId)
            
        if(!char) throw new Error("Char doesn't exists")

        const requiriment = requirimentRepository.create({charId})

        await requirimentRepository.save(requiriment)

        return requiriment

    }
}