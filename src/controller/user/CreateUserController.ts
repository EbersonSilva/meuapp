import { Request, Response } from "express";
import { CreateUserService } from "../../service/user/CreateUserService";

export class CreateUserController{
    async handle(request: Request, response: Response){
        const { name, email, admin, password} = request.body;
        
        // Verificando campos obrigatórios
        if (!name || !email || !password) {
            return response.status(400).json({ error: "Nome, email e senha são obrigatórios para criar um usuário" });
        }
        
        // Garantindo que a senha seja string
        if (typeof password !== 'string' && typeof password !== 'number') {
            return response.status(400).json({ error: "Senha deve ser uma string ou número" });
        }
        
        // Convertendo senha para string se for número
        const passwordStr = typeof password === "number" ? String(password) : password;
        
        // Criando instância do serviço
        const createUserService = new CreateUserService();
        try {
            const resp = await createUserService.execute({
                name,
                email,
                admin,
                password: passwordStr
            });
            return response.json(resp);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}
