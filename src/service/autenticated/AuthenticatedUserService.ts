import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UserRepositories } from '../../repository/UserRepositories';
import { getCustomRepository } from "typeorm";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

export class AuthenticatedUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        // Instância do repositório de usuários
        const userRepository = getCustomRepository(UserRepositories);
        
        // Buscar usuário pelo email
        const user = await userRepository.findOne({ email });
        
        // Verificar se o usuário existe
        if (!user) {
            throw new Error("Email/senha incorretos");
        }
        
        // Verificar se a senha está correta
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Email/senha incorretos");
        }
        
        // Gerar token JWT
        const token = sign(
            {
                email: user.email,
                name: user.name,
                admin: user.admin
            },
            "123456", // Idealmente, essa chave deve vir de variáveis de ambiente
            {
                subject: user.id, // Usar o ID do usuário como subject para identificação
                expiresIn: "1d"   // Token expira em 1 dia
            }
        );
        
        // Retornar token e informações básicas do usuário
        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                admin: user.admin
            }
        };
    }
}