import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repository/UserRepositories";

export class ListUserService {
    async execute() {
        // Obtendo o repositório de usuários    
        const userRepositories = getCustomRepository(UserRepositories);
        // Buscando todos os usuários no banco de dados
        const users = await userRepositories.find();   
        // Retornando a lista de usuários  
        return users;
    }
}
