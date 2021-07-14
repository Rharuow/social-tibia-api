import { getCustomRepository } from "typeorm";
import { RequirimentRepositories } from "../../repositories/RequirimentRepositories";


export class CreateRequirimentService {
    async execute(charId: string) {
        const requirmentRepository = getCustomRepository(RequirimentRepositories)

        const requiriment = requirmentRepository.create({charId})

        

    }
}