
import { Request, Response } from 'express';
import { CreateRequirimentService } from '../../servicies/Requiriment/CreateRequirimentService';

export class CreateRequirimentController {
  async handle(req: Request, res: Response) {
    const createRequirimentService = new CreateRequirimentService()

    try {
      const requiriments = await createRequirimentService.execute(req.body.char_id)
  
      return res.json(requiriments)

    } catch (err) {
      return res.status(500).json({message: err.message})
    }

  }
}