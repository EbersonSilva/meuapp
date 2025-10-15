import { Request, Response } from "express";
import { UpdateUserService } from "../../service/user/UpdateUserService";

export class UpdateUserController{
    async handle(request: Request, response: Response){
    
            // Obtendo ID da URL (params) e demais dados do corpo (body)
            const { id } = request.params;
            const { name, email, admin, password } = request.body;
            
            // Só o ID é obrigatório, os outros campos são opcionais
            if (!id) {
                return response.status(400).json({ error: "ID do usuário é obrigatório" });
            }
            
            // Preparar dados para atualização (apenas os que foram fornecidos)
            const updateData: any = { id };
            // Atualizando apenas os campos fornecidos
            if (name !== undefined) updateData.name = name;
            if (email !== undefined) updateData.email = email;
            if (admin !== undefined) updateData.admin = admin;
            
            // Garantir que senha é string se fornecida
            if (password !== undefined) {
                updateData.password = typeof password === "number" ? String(password) : password;
            }
            
            const updateUserService = new UpdateUserService();
            const resp = await updateUserService.execute(updateData);
            
            return response.json(resp);
        
    }
}