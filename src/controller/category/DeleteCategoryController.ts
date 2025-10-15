import { Request, Response } from "express";
import { DeleteCategoryService } from "../../service/category/DeleteCategoryService";

export class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        if (!id) {
            return response.status(400).json({ error: "ID da categoria é obrigatório" });
        }

        const deleteCategoryService = new DeleteCategoryService();
        const result = await deleteCategoryService.execute(id);

        return response.json(result);
    }
};
    