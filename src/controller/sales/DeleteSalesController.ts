import { Request, Response } from "express";

export class DeleteSalesController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        return response.json({ message: "Venda deletada com sucesso" });
    }
}