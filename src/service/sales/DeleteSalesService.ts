export class DeleteSalestService{
    async execute(id: string){
        if(!id){
            throw new Error("ID da venda é obrigatório");
        }
    }
}