import { Request, Response } from "express";
import { CreateSalesService } from "../../service/sales/CreateSalesService";

export class CreateSalesController{
    async handle(request: Request, response: Response){
        const{id, value, discount, productid, clientid} = request.body;
        // Verificando campos obrigatórios
        if(!value || !productid || !clientid){
            return response.status(400).json({error: "Campos value, productid e clientid são obrigatórios"});
        }
        // Criando instância do serviço
        const createSalesService = new CreateSalesService();
        // Executando o serviço
        const sales = await createSalesService.execute({
            id,
            value,
            discount,
            productid,
            clientid
        });

        return response.json({message: "Venda criada com sucesso", sales});
    }
}



    