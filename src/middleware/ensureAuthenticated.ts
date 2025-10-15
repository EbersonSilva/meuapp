import {Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"

interface IPayload{
    sub: string;
}

// Adicionamos esta declaração para permitir adicionar propriedades personalizadas à requisição
declare global {
    namespace Express {
        interface Request {
            user_id: string;
        }
    }
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    // Receber o token dos headers
    const authToken = request.headers.authorization;
    
    // Verificar se o token existe
    if(!authToken){
        return response.status(401).json({
            message: "Token não fornecido. Autenticação necessária."
        });
    }   
    
    // Separar o Bearer do token
    const [, token] = authToken.split(" ");
    
    try{
        // Verificar se o token é válido
        const { sub } = verify(token, "123456") as IPayload;
        
        // Armazenar o ID do usuário na request
        request.user_id = sub;
        
        return next();
    }catch(err){
        return response.status(401).json({
            message: "Token inválido ou expirado."
        });
    }           
}
