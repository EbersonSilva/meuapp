import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repository/CategoryRepositories";

export class ListCategoryService {
    async execute() {
        const categoryRepository = getCustomRepository(CategoryRepositories);
        
        const categories = await categoryRepository.find();
        
        return categories;
    }
}