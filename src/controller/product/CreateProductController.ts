import { Request, Response } from "express";
import { CreateProductService } from "../../service/product/CreateProductService";

export class CreateProductController{
    async handle(request: Request, response: Response){
        const { name, ean, price, description, categoryId} = request.body;
        // Verificando campos obrigatórios
        if(!name || !ean || !price || !categoryId){
            return response.status(400).json({error: "Campos name, ean, price e categoryId são obrigatórios"});
        }

        
        // Criando instância do serviço
        const createProductService = new CreateProductService();
        // Executando o serviço
        const product = await createProductService.execute({
            name,
            ean,
            price,
            description,
            categoryId
        });

        return response.json({message: "Produto incluido com sucesso", product});      
    }
}
