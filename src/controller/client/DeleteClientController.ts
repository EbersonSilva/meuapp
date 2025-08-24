import { Request, Response } from "express";

export class DeleteClientController{
    async handle(request: Request, response: Response){
        const { id } = request.params;
        
        response.json({message: "Registro excluido com sucesso"});
    }
}