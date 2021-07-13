
import { Response, Request } from 'express';
import { CreateCharService } from '../../servicies/Char/CreateCharService';

export class CreateCharController {
  async handle (req: Request, res: Response) {

    const createCharService = new CreateCharService()
    try {
      const char = await createCharService.execute(req.body)
      
      return res.status(200).json(char)
    } catch(err) {
      return res.status(406).json({message: err.message})
    }


  }
}