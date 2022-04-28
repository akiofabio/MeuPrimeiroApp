import { Request, Response } from "express";
import "express-async-errors";
import { CreateProdutoService } from "../../services/produto/CreateProdutoService";

class CreateProdutoController {

    async handle(request: Request, response: Response) {
        const createService = new CreateProdutoService();
        const {  nome , descricao , preco , id_categoria } = request.body;
        const produto = await createService.execute({
            nome,
            descricao,
            preco,
            id_categoria
        });
  
        return response.json(produto);
    }
}
export { CreateProdutoController };