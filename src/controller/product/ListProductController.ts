import { Request, Response } from "express"
export class ListProductsController {
    async handle(request: Request, response: Response) {
        const products = [
            {
                name: "Produto 1",
                ean: "1234567890123",
                price: 100,
                description: "Descrição do Produto 1",
                categoryId: "1"
            },
            {
                name: "Produto 2",
                ean: "1234567890124",
                price: 200,
                description: "Descrição do Produto 2",
                categoryId: "2"
            },

        ]
        return response.json(products)

    }
}