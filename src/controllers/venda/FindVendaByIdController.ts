import { Request, Response } from "express";
import { FindVendaByIdService } from "../../services/venda/FindVendaByIdService";

class FindVendaByIdController {
    async handle(request: Request, response: Response) {
        const findService = new FindVendaByIdService();
        const id= request.params.id;
        const venda = await findService.execute({id});

        return response.json(venda);
    }
}

export { FindVendaByIdController };