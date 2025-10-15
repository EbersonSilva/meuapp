import { IProductRequest } from "../../interface/IProductRequest";
import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repository/ProductRepositories";

export class CreateProductService {
    async execute({name, ean, price, description, categoryId}: IProductRequest) {
        if(!name || !ean || !price || !description || !categoryId){
            throw new Error("Todos os dados devem ser fornecidos")
        }
        //Verifica se o produto já existe
        
        const productRepository = getCustomRepository(ProductRepositories);
        // Verifica se o produto já existe
        const productAlreadyExists = await productRepository.findOne({ name });
        // Se existir, lança um erro
        if (productAlreadyExists) {
            throw new Error("Produto já existe");
        }
        // Se não existir, cria o produto
        const product = productRepository.create({
            name,
            ean,
            price,
            description,
            categoryId
        });
        // Salva o produto no banco de dados            
        await productRepository.save(product);
        // Retorna o produto criado
        return product;
    }
}
             