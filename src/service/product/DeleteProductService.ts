import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repository/ProductRepositories";

export class DeleteProductService {
    async execute(id: string) {
        if (!id) {
            throw new Error("ID do produto é obrigatório");
        }
        
        const productRepository = getCustomRepository(ProductRepositories);
        
        const product = await productRepository.findOne(id);
        if (!product) {
            throw new Error("Produto não encontrado");
        }
        
        await productRepository.delete(id);
        
        return { message: "Produto removido com sucesso" };
    }
}
