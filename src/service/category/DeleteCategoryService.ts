import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repository/CategoryRepositories";

export class DeleteCategoryService {
    async execute(id: string) {
        if (!id) { 
            throw new Error("ID da categoria é obrigatório");
        }
        
        const categoryRepository = getCustomRepository(CategoryRepositories);
        
        const categoryExists = await categoryRepository.findOne(id);
        if (!categoryExists) {
            throw new Error("Categoria não encontrada");
        }
        
        // Verificar se existe algum produto usando esta categoria
        // Esta verificação é opcional, mas recomendada para manter integridade referencial
        
        await categoryRepository.delete(id);
        return { message: "Categoria removida com sucesso" };
    }
}