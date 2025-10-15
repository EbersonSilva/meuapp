import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repository/UserRepositories";    

export class DeleteUserService {
    async execute(id: string) {
        const userRepositories = getCustomRepository(UserRepositories);
        // Usando a sintaxe correta para TypeORM 0.2.x
        const userAlreadyExists = await userRepositories.findOne(id);

        if (!userAlreadyExists) {
            throw new Error("Usuário não encontrado");
        }

        return await userRepositories.remove(userAlreadyExists);
    }
  }
  