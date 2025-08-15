import { Request, Response } from "express";

export class CreateUserController{
    async handle(request: Request, response: Response){
        const { name, email, admin, password} = request.body;
        const user = {
            name: name,
            email: email,
            admin: admin,
            password: password
        };
        response.json({message: "Registro incluido com sucesso"});
    }
}
