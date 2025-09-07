import { IClientRequest } from "../../interface/IClientRequest";

export class CreateClientService {
    async execute ({name, cpf, email, city, state, zipcode, number}: IClientRequest) {
        if (!name || !cpf || !email || !city || !state || !zipcode || !number) {
            throw new Error("Todos os dados devem ser fornecidos");
        }
        const client = {
            name,
            cpf,
            email,
            city,
            state,
            zipcode,
            number
        };
        return client;
    }
}