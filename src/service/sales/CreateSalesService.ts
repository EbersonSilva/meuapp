import { ISalesRequest } from "../../interface/ISalesRequest";
import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repository/SalesRepositories";


export class CreateSalesService {
    async execute({ value, discount = 0, productid, clientid }: ISalesRequest) {
        if (!productid || !clientid) {
            throw new Error("Produto e cliente são obrigatórios");
        }

        const salesAlreadyExists = await getCustomRepository(SalesRepositories).findOne({ productId: productid, clientId: clientid });
        if (salesAlreadyExists) {
            throw new Error("Venda já existe");
        }       
        
        const salesRepository = getCustomRepository(SalesRepositories);
        // Cria a nova venda    
        const sale = salesRepository.create(
            {
                value,
                discount,
                productId: productid,
                clientId: clientid
            }
        );
        
      
        // Salva a nova venda no banco de dados
        await salesRepository.save(sale);
        // Retorna a nova venda
        return sale;                
        
    }
}