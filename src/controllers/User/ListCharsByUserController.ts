
import { Request, Response } from 'express';
import { ListCharsByUserService } from '../../servicies/User/ListCharsByUserService';

export class ListCharsByUserController {

  async handle(req: Request, res: Response) {
    const listCharsByUserService = new ListCharsByUserService()

    const {id} = req.params

    const chars = listCharsByUserService.execute(id)

    return res.json(chars)

  }
}