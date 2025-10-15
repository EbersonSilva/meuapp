import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repository/ProductRepositories";

export class ListProductService {
    async execute() {
        const productRepository = getCustomRepository(ProductRepositories);
        
        const products = await productRepository.find();
        
        return products;
    }   
}