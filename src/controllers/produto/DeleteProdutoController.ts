import { Request, Response } from "express";
import { DeleteProdutoService } from "../../services/produto/DeleteProdutoService";

class DeleteProdutoController {
    async handle(request: Request, response: Response) {
        const deleteService = new DeleteProdutoService();
        const id= request.params.id;
        const produto = await deleteService.execute({id});

        return response.json(produto);
    }
}

export { DeleteProdutoController };