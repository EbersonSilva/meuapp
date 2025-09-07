export class UpdateCategoryService{
    async execute(id: string, name: string, description: string){
        if(!id || !name){
            throw new Error("ID e nome da categoria são obrigatórios");
        }
        const category = {
            id,
            name,
            description
        }
        return category;
    }
}