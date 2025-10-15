import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repository/UserRepositories";
import { hash } from "bcryptjs";
import { IUserRequest } from "../../interface/IUserRequest";


export class UpdateUserService {
    async execute({ id, name, email, admin, password }: Partial<IUserRequest> & { id: string }) {
        const userRepositories = getCustomRepository(UserRepositories);
        
        // Verificamos se o ID é válido
        if (!id) {
            throw new Error("ID de usuário é obrigatório");
        }
        
        try {
            // Primeiro tentamos buscar o usuário
            const user = await userRepositories.findOne(id);
            
            if (!user) {
                throw new Error("Usuário não encontrado");
            }
            
            // Criamos um objeto com os dados atuais
            const userData = { ...user };
            
            // Atualizamos apenas os campos fornecidos
            if (name !== undefined) {
                userData.name = name;
            }
            
            if (email !== undefined) {
                userData.email = email;
            }
            
            if (admin !== undefined) {
                userData.admin = typeof admin === "boolean" ? admin : (admin === "true");
            }
            
            if (password !== undefined) {
                userData.password = await hash(password, 8);
            }
            
            // Usamos o método save para atualizar
            await userRepositories.save(userData);
            
            // Buscamos novamente para retornar os dados atualizados
            const updatedUser = await userRepositories.findOne(id);
            return updatedUser;
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error("Erro ao atualizar usuário");
        }
    }
}   