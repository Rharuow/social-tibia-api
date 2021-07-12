
import { Request, Response } from 'express';
import { ListCharService } from '../../servicies/Char/ListCharService';

export class ListCharController {

  async handle(req: Request, res: Response) {
    const listCharService = new ListCharService()

    const chars = await listCharService.execute()

    return res.json(chars)

  }
}