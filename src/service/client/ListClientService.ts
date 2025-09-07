export class ListClientService{
    async execute(){
        const clients = [
            {
                name: "Eberson Silva",
                cpf: "123.456.789-00",
                email: "eberson@example.com",
                adress: "Rua A, 123",
                zipcode: "12345-678",
                number: "123",
                city: "São Paulo",
                state: "SP" 
            },
            {
                name: "Maria Oliveira",
                cpf: "987.654.321-00",
                email: "maria@example.com",
                adress: "Rua B, 456",
                zipcode: "87654-321",
                number: "456",
                city: "Rio de Janeiro",
                state: "RJ"
            }
        ];
        return clients;
    }
}