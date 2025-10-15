import { Request, Response } from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";

export class DeleteUserController{
    async handle(request: Request, response: Response){
        try {
            const id = request.params.id;

            if (!id) {
                return response.status(400).json({ error: "ID do usuário é obrigatório" });
            }
            
            const deleteUserService = new DeleteUserService();
            
            await deleteUserService.execute(id);
            
            return response.json({message: `Registro ${id} excluído com sucesso`});
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message });
            }
            return response.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}