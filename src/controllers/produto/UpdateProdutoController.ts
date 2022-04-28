import { Request, Response } from "express";
import { UpdateProdutoService } from "../../services/produto/UpdateProdutoService";

class UpdateProdutoController {

    async handle(request: Request, response: Response) {
        const updateService = new UpdateProdutoService();
        const { id , nome , descricao , preco , id_categoria } = request.body;
        const produto = await updateService.execute({
            id,
            nome,
            descricao,
            preco,
            id_categoria
        });

        return response.json(produto);
    }
}

export { UpdateProdutoController };