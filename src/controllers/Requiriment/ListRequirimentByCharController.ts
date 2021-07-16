
import { Request, Response } from 'express';
import { ListRequirimentByCharService } from '../../servicies/Requiriment/ListRequirimentByCharService';

export class ListRequirimentByCharController {
  async handle(req: Request, res: Response) {
    const requirimentByCharService = new ListRequirimentByCharService()

    try {
      const requirimentByChar = await requirimentByCharService.execute(req.params.id)

      return res.json({requirimentByChar})

    } catch (error) {
      return res.status(204).json({message: error.message})
    }

  }
}