import { Request, Response } from "express";

export class UpdateProductController{
    async handle(request: Request, response: Response){
        const {id, name, ean, price, description, categoryId} = request.body
        console.log(name)
        console.log(ean)
        console.log(price)
        console.log(description)
        console.log(categoryId)

        const product = {
            id: id,
            name: name,
            ean: ean,
            price: price,
            description: description,
            categoryId: categoryId
            
        }
        return response.json(product)
    }
}