import { Request, Response } from "express"
import { ListProductService } from "../../service/product/ListProductService"

export class ListProductsController {
    async handle(request: Request, response: Response) {
        // Criando instância do serviço
        const listProductService = new ListProductService();
        // Executando o serviço
        const products = await listProductService.execute();
        // Retornando a resposta
        return response.json({message: "Lista de produtos", products});

    }
}