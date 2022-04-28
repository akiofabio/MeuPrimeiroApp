import { Request, Response } from "express";
import { FindVendaByClienteService } from "../../services/venda/FindVendaByClienteService";

class FindVendaByClienteController {
    async handle(request: Request, response: Response) {
        const findService = new FindVendaByClienteService();
        const id_cliente= request.params.cliente;
        const venda = await findService.execute({id_cliente});

        return response.json(venda);
    }
}

export { FindVendaByClienteController };