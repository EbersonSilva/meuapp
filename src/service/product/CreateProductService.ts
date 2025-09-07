import { IProductRequest } from "../../interface/IProductRequest";

export class CreateProductService {
    async execute({name, ean, price, description, categoryId}: IProductRequest) {
        if(!name || !ean || !price || !description || !categoryId){
            throw new Error("Todos os dados devem ser fornecidos")
        }
        const product = {
            name,
            ean,
            price,
            description,
            categoryId
        };
        return product;
    }
}