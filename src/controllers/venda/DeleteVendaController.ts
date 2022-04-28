import { Request, Response } from "express";
import { DeleteVendaService } from "../../services/venda/DeleteVendaService";

class DeleteVendaController {
    async handle(request: Request, response: Response) {
        const deleteService = new DeleteVendaService();
        const id= request.params.id;
        const venda = await deleteService.execute({id});

        return response.json(venda);
    }
}

export { DeleteVendaController };