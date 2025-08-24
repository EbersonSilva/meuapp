import { Request, Response } from "express";

export class UpdateClientController{
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const { name, email, cpf, adress, zipcode, number, city, state } = request.body;

        console.log(id);
        console.log(name);
        console.log(email);
        console.log(cpf);
        console.log(adress);
        console.log(zipcode);
        console.log(number);
        console.log(city);
        console.log(state);

        const client = {
            id: id,
            name: name,
            email: email,
            cpf: cpf,
            adress: adress,
            zipcode: zipcode,
            number: number,
            city: city,
            state: state
        }

        response.json({message: "Registro atualizado com sucesso", client});
    }
}