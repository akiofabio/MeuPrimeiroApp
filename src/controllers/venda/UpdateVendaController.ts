import { Request, Response } from "express";
import { UpdateVendaService } from "../../services/venda/UpdateVendaService";

class UpdateVendaController {

    async handle(request: Request, response: Response) {
        const updateService = new UpdateVendaService();
        const { id , id_produto, id_cliente, quantidade, totalBruto , desconto, valorTotal } = request.body;
        const venda = await updateService.execute({
            id,
            id_produto,
            id_cliente,
            quantidade,
            totalBruto,
            desconto,
            valorTotal
        });

        return response.json(venda);
    }
}

export { UpdateVendaController };