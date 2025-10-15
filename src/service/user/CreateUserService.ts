import {IUserRequest} from "../../interface/IUserRequest"
import { hash } from "bcryptjs"
import { UserRepositories } from "../../repository/UserRepositories"    
import { getCustomRepository } from "typeorm"   

export class CreateUserService{
    // Ajustando o tipo de admin para aceitar boolean ou string 
    async execute({name, email, admin = false, password}: IUserRequest){
        if (!email){
            throw new Error("Email incorreto")
        }
        
       // Obtendo o repositório de usuários
        const userRepository = getCustomRepository(UserRepositories)

       const userAlreadyExists = await userRepository.findOne({ email })
       
       if (userAlreadyExists){
        throw new Error("Usuário já existe");
        }
        // Garantindo que a senha seja string
        const passwordHash = await hash(password, 8)
        // Convertendo admin para boolean independente do tipo
        const adminValue = typeof admin === "boolean" ? admin : admin === "true";
        // Agora adminValue é sempre boolean
        const user = userRepository.create({
            name,
            email,
            admin: adminValue,
            password: passwordHash
        })
        await userRepository.save(user)
        return user
        
    }
}