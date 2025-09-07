import { ISalesRequest } from "../../interface/ISalesRequest";

export class UpdateSalesService{
    async execute({
        id,
        value,
        discount,
        productid,
        clientid
    }: ISalesRequest){
    if(!id){ throw new Error("ID da venda é obrigatório");
    }
    const sale = {
        id,
        value,
        discount,
        productid,
        clientid
    }
    return sale;
}
}