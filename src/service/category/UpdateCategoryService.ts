import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repository/CategoryRepositories";
import { ICategoryRequest } from "../../interface/ICategoryRequest";

export class UpdateCategoryService {
    async execute({ id, name, description }: ICategoryRequest) {
        if (!id) {
            throw new Error("ID da categoria é obrigatório");
        }
        
        const categoryRepository = getCustomRepository(CategoryRepositories);

        const category = await categoryRepository.findOne(id);
        if (!category) {
            throw new Error("Categoria não encontrada");
        }

        // Verifica se o nome da categoria já existe para outra categoria
        const categoryAlreadyExists = await categoryRepository.findOne({ name });
        if (categoryAlreadyExists && categoryAlreadyExists.id !== id) {
            throw new Error("Categoria com esse nome já existe");
        }
        
        if (name !== undefined) category.name = name;
        if (description !== undefined) category.description = description;
        
        await categoryRepository.save(category);
        
        return category;
    }
}