import { Request, Response } from "express";
import { UpdateSalesService } from "../../service/sales/UpdateSalesService";

export class UpdateSalesController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        
        const { value, discount, productid, clientid } = request.body;
        if (!id) {
            return response.status(400).json({ error: "ID da venda é obrigatório" });
        }
        
        // Executando o serviço
        const updateData: any = { id };
        // Atualizando apenas os campos fornecidos
        if (value !== undefined) updateData.value = value;
        if (discount !== undefined) updateData.discount = discount;
        if (productid !== undefined) updateData.productid = productid;
        if (clientid !== undefined) updateData.clientid = clientid;

        // Criando instância do serviço
        const updateSalesService = new UpdateSalesService();
        // Executando o serviço
        const resp = await updateSalesService.execute(updateData);

        return response.json({ message: "Venda atualizada com sucesso", sale: resp });
    }
}