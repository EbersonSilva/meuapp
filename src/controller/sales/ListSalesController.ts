import { Request, Response } from "express";  
export class ListSalesController {
    async handle(request: Request, response: Response) {
        const sales = [{
            id: 1,
            value: 100,
            discount: 10,
            productid: 1,
            ClientId: 1
        }]
        return response.json({ message: "Lista de vendas" });
    }
}