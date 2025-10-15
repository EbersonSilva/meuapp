import { Request, Response } from "express";
import { DeleteClientService } from "../../service/client/DeleteClientService";

export class DeleteClientController{
    async handle(request: Request, response: Response){
        try{
            // Obtendo ID da URL (params)
            const id = request.params.id;
            // Criando instância do serviço
            const deleteClientService = new DeleteClientService();
            // Executando o serviço
            await deleteClientService.execute(id);
            // Retornando a resposta
            return response.json({message: `Registro ${id} excluído com sucesso`});
        }catch(err){
            return response.status(400).json({message: err.message});
        }
        return response.status(500).json({ error: "Erro interno do servidor" });
    }
}