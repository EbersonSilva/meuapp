import { Request, Response } from "express";
import { UpdateUserService } from "../../service/user/UpdateUserService";

export class UpdateUserController{
    async handle(request: Request, response: Response){
        const {id, name, email, admin, password} = request.body

        const updateUserService = new UpdateUserService();
        const resp = await updateUserService.execute({
            id,
            name,
            email,
            admin,
            password
        });

        return response.json(resp)
    }
}