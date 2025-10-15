import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repository/SalesRepositories";

export class ListSalesService {
    async execute() {
        const salesRepository = getCustomRepository(SalesRepositories);
        // Busca todas as vendas
        const salesAlreadyExists = await salesRepository.find();

        // Verifica se há vendas cadastradas
        if (!salesAlreadyExists || salesAlreadyExists.length === 0) {
            throw new Error("Nenhuma venda encontrada");
        }
        // Retorna a lista de vendas
        return salesAlreadyExists;
    }
}