import { Request, response, Response } from "express";
import { CreateUserService } from '../servicies/CreateUserService';


export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { username, email, password } = req.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({username, email, password})

    return response.json(user)

  }
}