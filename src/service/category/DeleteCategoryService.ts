export class DeleteCategoryService{
    async execute(id: string){
        if(!id){ throw new Error("ID da categoria é obrigatório");
        }
        return { id };
    }
}