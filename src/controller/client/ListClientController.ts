import { Response, Request } from "express";

export class ListClientController{
    async handle(request: Request, response: Response){
        const client = {
            id: 1,
            name: "Marcos Silva",
            email: "marcossilva@gmail.com",
            cpf: "123.456.789-00",
            adress: "Rua pará",
            zipcode: "12345-678",
            number: 123,
            city: "Suzano",
            state: "SP"
        }
        response.json({message: "Lista de clientes", client});
    }
}