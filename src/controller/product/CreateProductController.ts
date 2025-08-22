import { Request, Response } from "express";

export class CreateProductController{
    async handle(request: Request, response: Response){
        const { name, ean, price, description, categoryId} = request.body;
        const product = {
            name: name,
            ean: ean,
            price: price,
            description: description,
            categoryId: categoryId
        };
        response.json({message: "Produto incluido com sucesso"});
    }
}
