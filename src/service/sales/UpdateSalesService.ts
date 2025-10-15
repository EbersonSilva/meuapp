import { ISalesRequest } from "../../interface/ISalesRequest";
import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repository/SalesRepositories";

export class UpdateSalesService {
    async execute({
        id,
        value,
        discount,
        productid,
        clientid
    }: ISalesRequest) {
        if (!id) { 
            throw new Error("ID da venda é obrigatório");
        }
        
        const salesRepository = getCustomRepository(SalesRepositories);
        
        const sale = await salesRepository.findOne(id);
        if (!sale) {
            throw new Error("Venda não encontrada");
        }
        
        if (value !== undefined) sale.value = value;
        if (discount !== undefined) sale.discount = discount;
        if (productid !== undefined) sale.productId = productid;
        if (clientid !== undefined) sale.clientId = clientid;
        
        await salesRepository.save(sale);
        
        return sale;
    }
}