import { Request, Response } from "express";

export class DeleteUserController{
    async handle(request: Request, response: Response){
        const id= request.params.id;
        console.log(id)
        response.json({message: "Registro Excluido com Sucesso"})
    }
}