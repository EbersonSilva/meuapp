export class DeleteClientService{
    async execute(id: string){
        if(!id){
            throw new Error("ID do cliente é obrigatório");
        }
    }
}