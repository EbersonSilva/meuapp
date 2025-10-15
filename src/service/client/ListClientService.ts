import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repository/ClientRepositories";
export class ListClientService{
    async execute(){
        // Obtendo o repositório de clientes
        const clientRepositories = getCustomRepository(ClientRepositories);
        // Buscando todos os clientes no banco de dados
        const clients = await clientRepositories.find();
        // Retornando a lista de clientes
        return clients;
    }
}