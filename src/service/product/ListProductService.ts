export class ListProductService{
    async execute(){
        const products = [
            {
                id: "1",
                name: "Produto A",
                ean: "1234567890123",
                price: 19.99,
                description: "Descrição do Produto A",
                categoryId: "cat1"
            },
            {
                id: "2",
                name: "Produto B",
                ean: "9876543210987",
                price: 29.99,
                description: "Descrição do Produto B",
                categoryId: "cat2"
            }
        ]
        return products;
    }   
}