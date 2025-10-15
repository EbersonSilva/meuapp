import { Request, Response } from "express";
import { DeleteProductService } from "../../service/product/DeleteProductService";

export class DeleteProductController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        
        if (!id) {
            return response.status(400).json({ error: "ID do produto é obrigatório" });
        }
        
        // Criando instância do serviço
        const deleteProductService = new DeleteProductService();
        // Executando o serviço 
        const result = await deleteProductService.execute(id);
        // Retornando a resposta
        return response.json(result);
    }
}