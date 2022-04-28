import { Request, Response } from "express";
import { FindVendaByProdutoService } from "../../services/venda/FindVendaByProdutoService";

class FindVendaByProdutoController {
    async handle(request: Request, response: Response) {
        const findService = new FindVendaByProdutoService();
        const id_produto= request.params.produto;
        const venda = await findService.execute({id_produto});

        return response.json(venda);
    }
}

export { FindVendaByProdutoController };