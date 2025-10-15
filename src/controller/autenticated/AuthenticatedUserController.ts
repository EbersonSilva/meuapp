import { Request, Response } from "express";
import { AuthenticatedUserService } from "../../service/autenticated/AuthenticatedUserService";

export class AuthenticatedUserController {
    async handle(request: Request, response: Response) {
        try {
            // Dados do corpo da requisição
            const { email, password } = request.body;
            
            // Validação básica dos campos
            if (!email || !password) {
                return response.status(400).json({ 
                    error: "Email e senha são obrigatórios" 
                });
            }
            
            // Instância do serviço
            const authenticatedUserService = new AuthenticatedUserService();
            
            // Executando o serviço
            const auth = await authenticatedUserService.execute({ 
                email, 
                password 
            });
            
            // Retornando o token e informações do usuário
            return response.json(auth);
            
        } catch (error) {
            return response.status(401).json({ 
                error: error.message || "Falha na autenticação" 
            });
        }
    }   
}