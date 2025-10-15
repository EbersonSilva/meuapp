import { Request, Response } from "express";
import { CreateClientService } from "../../service/client/CreateClientService";

export class CreateClientController{
    async handle(request: Request, response: Response){
        const{id, name, email, cpf, address, zipcode, number, city, state} = request.body;
        
        const createClientService = new CreateClientService();
        try { 
            const resp = await createClientService.execute({
                id: id,
                name: name,
                email: email,
                cpf: cpf,
                address: address,
                zipcode: zipcode,
                number: number,
                city: city,
                state: state
            });
            return response.json(resp);

        } catch (error) {
           return response.status(400).json({ error: error.message });
        }
    }
}