import { Response, Request } from "express";
import { ListClientService } from "../../service/client/ListClientService";

export class ListClientController{
    async handle(request: Request, response: Response){
        // Criar instância do serviço
        const listClientService = new ListClientService();
        // Executar o serviço
        const clients = await listClientService.execute();
        // Retornar a resposta
        return response.json({message: "Lista de clientes", clients});
    }
}