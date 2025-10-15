import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/category/CreateCategoryService";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        if (!name) {
            return response.status(400).json({ error: "Nome da categoria é obrigatório" });
        }
        // Criar instância do serviço
        const createCategoryService = new CreateCategoryService();
        // Executar o serviço
        const category = await createCategoryService.execute({ name, description });
    

        // Retornar a resposta
        return response.json(category);
    }
}