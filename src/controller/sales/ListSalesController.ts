import { Request, Response } from "express";  
import { ListSalesService } from "../../service/sales/ListSalesService";

export class ListSalesController {
    async handle(request: Request, response: Response) {
        // Criar instância do serviço
        const listSalesService = new ListSalesService();
        // Executar o serviço
        const sales = await listSalesService.execute();
        // Retornar a resposta
        return response.json({ sales });
    }
}