import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repository/SalesRepositories";

export class DeleteSalesService {
    async execute(id: string) {
        if (!id) {
            throw new Error("ID da venda é obrigatório");
        }
        
        const salesRepository = getCustomRepository(SalesRepositories);
        
        const sale = await salesRepository.findOne(id);
        if (!sale) {
            throw new Error("Venda não encontrada");
        }
        
        await salesRepository.delete(id);
        
        return { message: "Venda removida com sucesso" };
    }
}