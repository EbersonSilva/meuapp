import { Request, Response } from "express";
import { DeleteSalesService } from "../../service/sales/DeleteSalesService";

export class DeleteSalesController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        
        if (!id) {
            return response.status(400).json({ error: "ID da venda é obrigatório" });
        }
        
        // Criando instância do serviço
        const deleteSalesService = new DeleteSalesService();
        // Executando o serviço
        const result = await deleteSalesService.execute(id);
        // Retornando a resposta
        return response.json(result);
    }
}