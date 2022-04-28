import { Request, Response } from "express";
import { FindProdutoByIdService } from "../../services/produto/FindProdutoByIdService";

class FindProdutoByIdController {
    async handle(request: Request, response: Response) {
        const findService = new FindProdutoByIdService();
        const id= request.params.id;
        const produto = await findService.execute({id});

        return response.json(produto);
    }
}

export { FindProdutoByIdController };