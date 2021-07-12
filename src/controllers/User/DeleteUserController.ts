import { Request, Response } from "express";
import { DeleteUserService } from "../../servicies/User/DeleteuserService";


export class DeleteUserController {
    async handle (req: Request, res: Response) {
        const deleteUserService = new DeleteUserService();

        const {id} = req.body

        try {
            const user = deleteUserService.execute(id)
            return res.json({
                user,
                message: 'User has been deleted'
            })
        } catch(err) {
            console.log(err)
        }
    }
}