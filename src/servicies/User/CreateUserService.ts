import { getCustomRepository } from "typeorm";
import { hash } from 'bcryptjs'

import { UserRepositories } from '../../repositories/UserRepositories';


interface IUserRequest {
  username: string
  email: string
  password: string
}

export class CreateUserService {
  
  async execute({username, email, password}: IUserRequest) {
    const userRepository = getCustomRepository(UserRepositories)

    const userAlreadyExists = await userRepository.findOne({email})

    if(userAlreadyExists) throw new Error("User already exists")
    
    const passwordHashed = await hash(password, parseInt(process.env.HASH_SALTS))

    const user = userRepository.create({username, email, password: passwordHashed})

    await userRepository.save(user)

    return user

  }
}