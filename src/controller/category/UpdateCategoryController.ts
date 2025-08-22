import { Request, Response } from "express";

export class UpdateCategoryController {
    handle(request: Request, response: Response) {
        const { id, name, description } = request.body;
        console.log(name);
        console.log(description);
        
        const category = {
            id,
            name,
            description
        }

        return response.json(category);
    }
}