import { Request, Response } from "express";

export class DeleteProductController{
    async handle(request: Request, response: Response){
        const id= request.params.id;
        console.log(id)
        response.json({message: `Registro ${id} Excluido com Sucesso`})
    }
}