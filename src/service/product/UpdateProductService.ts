import { IProductRequest } from "../../interface/IProductRequest";
import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repository/ProductRepositories";

export class UpdateProductService {
    async execute ({
        id,
        name,
        ean,
        price,
        description,
        categoryId
    }: IProductRequest) {
        if (!id) {
            throw new Error("ID do produto é obrigatório");
        }
        // Verifica se o nome do produto já existe para outro produto
        const productAlreadyExists = await getCustomRepository(ProductRepositories).findOne({ name });
        // Se existir, lança um erro
        if (productAlreadyExists && productAlreadyExists.id !== id) {
            throw new Error("Produto com esse nome já existe");
        }
        const productRepository = getCustomRepository(ProductRepositories);
        
        const product = await productRepository.findOne(id);
        if (!product) {
            throw new Error("Produto não encontrado");
        }
        // Atualiza apenas os campos fornecidos
        if (name !== undefined) product.name = name;
        if (ean !== undefined) product.ean = ean;
        if (description !== undefined) product.description = description;
        if (price !== undefined) product.price = price;
        if (categoryId !== undefined) product.categoryId = categoryId;
        
        await productRepository.save(product);
        
        return product;
    }
}