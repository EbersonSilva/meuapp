import { Request, Response } from "express";


export class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        return response.json({ message: `Categoria ${id} deletada com sucesso` });
    }
};
    