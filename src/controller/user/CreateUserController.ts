import { Request, Response } from "express";
import { CreateUserService } from "../../service/user/CreateUserService";

export class CreateUserController{
    async handle(request: Request, response: Response){
        const { name, email, admin, password} = request.body;
        const createUserService = new CreateUserService();
        const resp = await createUserService.execute({
            name: name,
            email: email,
            admin: admin,
            password: password
        });
       return response.json(resp);
    }
}
