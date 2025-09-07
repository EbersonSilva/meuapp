import { ICategoryRequest } from "../../interface/ICategoryRequest";
export class CreateCategoryService{
    async execute({
        name, description
    }: ICategoryRequest){
        if(!name){
            throw new Error("Nome da categoria é obrigatório");
        }
        const category = {
            name,
            description
        }
        return category;
    }
}