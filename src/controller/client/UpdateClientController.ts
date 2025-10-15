import { Request, Response } from "express";
import { UpdateClientService } from "../../service/client/UpdateClientService";

export class UpdateClientController{
    async handle(request: Request, response: Response){
        // Obtendo ID da URL (params) e demais dados do corpo (body)
        const { id } = request.params;
        const { name, email, cpf, adress, zipcode, number, city, state } = request.body;

        if (!id) {
            return response.status(400).json({ error: "ID do cliente é obrigatório" });
        }
        
        // Preparar dados para atualização (apenas os que foram fornecidos)
        const updateData: any = { id };
        // Atualizando apenas os campos fornecidos
        if (name !== undefined) updateData.name = name;
        if (email !== undefined) updateData.email = email;
        if (cpf !== undefined) updateData.cpf = cpf;
        if (adress !== undefined) updateData.adress = adress;
        if (zipcode !== undefined) updateData.zipcode = zipcode;
        if (number !== undefined) updateData.number = number;
        if (city !== undefined) updateData.city = city;
        if (state !== undefined) updateData.state = state;

        // Supondo que você tenha um serviço para atualizar o cliente
        const updateClientService = new UpdateClientService();
        // Executando o serviço
        const resp = await updateClientService.execute(updateData);
        // Retornando a resposta
       return response.json({message: "Registro atualizado com sucesso", client: resp});
}    
}