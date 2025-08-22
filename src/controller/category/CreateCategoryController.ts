import { Request, Response } from "express";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const category = {
            id: "1",
            name: name,
            description: description
        };

        return response.json(category);
    }
}