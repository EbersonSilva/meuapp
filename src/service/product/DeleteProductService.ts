export class DeleteProductService{
    async execute(id: string){
        if(!id){
            throw new Error("ID do produto é obrigatório");
        }
    }
}
