import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/category/UpdateCategoryService";

export class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, description } = request.body;

        if (!id) {
            return response.status(400).json({ error: "ID da categoria é obrigatório" });
        }

        const updatedData: any = {id};
        if (name !== undefined) updatedData.name = name;
        if (description !== undefined) updatedData.description = description;

        const updateCategoryService = new UpdateCategoryService();
        const resp = await updateCategoryService.execute(updatedData);

        return response.json({ message: "Categoria atualizada com sucesso", resp });
    }
}