
import { Request, Response } from 'express';
import { ListRequirimentsService } from '../../servicies/Requiriment/ListRequirimentsService';

export class ListRequirimentController {
  async handle(req: Request, res: Response) {
    const listRequirimentsService = new ListRequirimentsService()
    
    const requiriments = await listRequirimentsService.execute()

    if(requiriments.length === 0) return res.json({message: "There ins't requiriments"})
    
    return res.json({requiriments})

  }
}