import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";

export class DeleteUserService {
    async execute(id: string) {
        const userRepository = getCustomRepository(UserRepositories)
        const user = await userRepository.delete({id: id});
        return user    
    }
}