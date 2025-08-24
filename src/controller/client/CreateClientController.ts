import { Request, Response } from "express";

export class CreateClientController{
    async handle(request: Request, response: Response){
        const{id, name, email, cpf, adress, zipcode, number, city, state} = request.body;
        const client = {
            id: id,
            name: name,
            cpf: cpf,
            email: email,
            adress: adress,
            zipcode: zipcode,
            number: number,
            city: city,
            state: state

        }
        response.json({message: "Registro incluido com sucesso"});
    }
}