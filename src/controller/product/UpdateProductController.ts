import { Request, Response } from "express";
import { UpdateProductService } from "../../service/product/UpdateProductService";

export class UpdateProductController{
    async handle(request: Request, response: Response){
        const {id} = request.params;
        // Verificando campos obrigatórios
        const { name, ean, price, description, categoryId} = request.body;
            if (!id) {
                return response.status(400).json({ error: "ID do produto é obrigatório" });
            }
        

        //executando o serviço
        const updateData: any = { id };
        // Atualizando apenas os campos fornecidos
        if (name !== undefined) updateData.name = name;
        if (ean !== undefined) updateData.ean = ean;
        if (price !== undefined) updateData.price = price;
        if (description !== undefined) updateData.description = description;
        if (categoryId !== undefined) updateData.categoryId = categoryId;   

        // Criando instância do serviço
        const updateProductService = new UpdateProductService();
        // Executando o serviço
        const resp = await updateProductService.execute(updateData);
        // Retornando a resposta
        return response.json({message: "Produto atualizado com sucesso", product: resp});
    }
}