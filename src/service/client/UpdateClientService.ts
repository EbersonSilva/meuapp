import { IClientRequest } from "../../interface/IClientRequest";

export class UpdateClientService{
    async execute({
        id,
        name,
        cpf,
        email,
        adress,
        zipcode,
        number,
        city,
        state
    }: IClientRequest){
        if(!id){
            throw new Error("ID do cliente é obrigatório");

        }
        const client ={
            id:id,
            name:name,
            cpf:cpf,    
            email:email,
            address:adress,
            zipcode:zipcode,
            number:number,
            city:city,
            state:state
        }
    }
}