import { Request, Response } from "express";
import { ListUserService } from "../../service/user/ListUserService";

export class ListUsersController {
    async handle(request: Request, response: Response) {
        // Criar instância do serviço
        const listUserService = new ListUserService();
        // Executar o serviço
        const users = await listUserService.execute();
        // Retornar a resposta
        return response.json({message: "Lista de usuários", users});

    }
}