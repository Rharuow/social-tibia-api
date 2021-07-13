
import { Request, Response } from 'express';
import { ListCharsByUserService } from '../../servicies/User/ListCharsByUserService';

export class ListCharsByUserController {

  async handle(req: Request, res: Response) {
    try {
      const listCharsByUserService = new ListCharsByUserService()
      
      const {id} = req.params

      const chars = await listCharsByUserService.execute(id)
  
      return res.json(chars)
      
    } catch (error) {
      return res.status(507).json({message: error.message})
    }
  }
}