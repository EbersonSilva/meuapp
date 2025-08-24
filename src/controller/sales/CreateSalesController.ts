import { Request, Response } from "express";

export class CreateSalesController{
    async handle(request: Request, response: Response){
        const{id, value, discount, productid, Clientid} = request.body;
        const sales = {
            id: id,
            value: value,
            discount: discount,
            productid: productid,
            Clientid: Clientid
        }
        response.json({message: "Registro incluido com sucesso"});
    }
}