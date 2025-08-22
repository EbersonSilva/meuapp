import { Request, Response } from "express";

export class ListCategoryController {
    handle(request: Request, response: Response) {
        const categories = [
            { id: "1", name: "Categoria 1", description: "Descrição da Categoria 1" },
            { id: "2", name: "Categoria 2", description: "Descrição da Categoria 2" }
        ];

        return response.json(categories);
    }
}