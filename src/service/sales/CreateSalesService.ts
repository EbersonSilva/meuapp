import { ISalesRequest } from "../../interface/ISalesRequest";

export class CreateSalesService {
    async execute({ value, discount = 0, productid, clientid }: ISalesRequest) {
        if (!productid || !clientid) {
            throw new Error("Produto e cliente são obrigatórios");
        }
        const sale = {
            value,
            discount,
            productid,
            clientid
        };
        return sale;
    }
}