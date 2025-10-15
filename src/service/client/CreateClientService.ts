import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../interface/IClientRequest";
import { ClientRepositories } from "../../repository/ClientRepositories";


export class CreateClientService {
    async execute ({name, cpf, email,  address, city, state, zipcode, number}: IClientRequest) {
        if (!name || !cpf || !email || !city || !state || !zipcode || !number) {
            throw new Error("Todos os dados devem ser fornecidos");
        }

        const clientRepository = getCustomRepository(ClientRepositories)
        
        // Verifica se já existe um cliente com o mesmo CPF
        const clientWithSameCpf = await clientRepository.findOne({ cpf });
        if (clientWithSameCpf) {
            throw new Error("Já existe um cliente com este CPF");
        }
        
       // Cria o novo cliente
        const client = clientRepository.create({
            name,
            cpf,
            email,
            address,
            city,
            state,
            zipcode,
            number
        });
        // Salva o novo cliente no banco de dados
        await clientRepository.save(client);
        // Retorna o novo cliente
        return client;
    }
}