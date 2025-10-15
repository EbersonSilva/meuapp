import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repository/ClientRepositories";

export class DeleteClientService{
    async execute(id: string){
        // Obtendo o repositório de clientes
        const clientRepositories = getCustomRepository(ClientRepositories);

        // Verificando se o cliente existe
        const clientAlreadyExists = await clientRepositories.findOne(id);
        // Se o cliente não existir, lançamos um erro
        if(!clientAlreadyExists){
            throw new Error("Cliente não encontrado");
        }

        // Removendo o cliente
        return await clientRepositories.remove(clientAlreadyExists);
    }
}