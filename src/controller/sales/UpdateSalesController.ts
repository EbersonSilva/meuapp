import { Request, Response } from "express";
export class UpdateSalesController {
    async handle(request: Request, response: Response) {
        const { id, value, discount, productid, ClientId } = request.body;
        console.log(id)
        console.log(value)
        console.log(discount)
        console.log(productid)
        console.log(ClientId)

        
        const updatedSale = {
            id: id,
            value: value,
            discount: discount,
            productid: productid,
            ClientId: ClientId
        };

        return response.json({ message: "Venda atualizada com sucesso", sale: updatedSale });
    }
}