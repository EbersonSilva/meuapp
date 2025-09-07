export class ListSalesService {
    async execute() {
        const sales = [
            {
                id: "1",
                value: 100,
                discount: 10,
                clientId: "1",
                productId: "1",
            },
            {
                id: "2",
                value: 200,
                discount: 20,
                clientId: "2",
                productId: "2",
            }
        ]
        return sales;
    }
}