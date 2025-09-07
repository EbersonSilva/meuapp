import { IProductRequest } from "../../interface/IProductRequest";
export class UpdateProductService{
    async execute ({
        id,
        name,
        price,
        description
    }: IProductRequest){
        if(!id){
            throw new Error("ID do produto é obrigatório");
        }
        const product = {
            id:id,
            name:name,
            price:price,
            description:description
        }
        return product;
    }
}