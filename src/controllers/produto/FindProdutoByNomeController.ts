import { Request, Response } from "express";
import { FindProdutoByNomeService } from "../../services/produto/FindProdutoByNomeService";

class FindProdutoByNomeController {
    async handle(request: Request, response: Response) {
        const findService = new FindProdutoByNomeService();
        const nome= request.params.nome;
        const produto = await findService.execute({nome});

        return response.json(produto);
    }
}

export { FindProdutoByNomeController };