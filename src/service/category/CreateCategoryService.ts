import { ICategoryRequest } from "../../interface/ICategoryRequest";
import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repository/CategoryRepositories";

export class CreateCategoryService{
    async execute({
        name, description
    }: ICategoryRequest){
        if(!name){
            throw new Error("Nome da categoria é obrigatório");
        }

        const categoryRepository = getCustomRepository(CategoryRepositories)
        // Verificando se a categoria já existe pelo nome
        const categoryAlreadyExists = await categoryRepository.findOne({
            name
        })
        // Se a categoria já existir, lança um erro
        if(categoryAlreadyExists){
            throw new Error("Categoria já existe");
        }
        // Cria a nova categoria
        const category = categoryRepository.create({
            name,
            description
        });
            // Salva a nova categoria no banco de dados
        await categoryRepository.save(category);
            // Retorna a nova categoria
        return category;
    }
}

