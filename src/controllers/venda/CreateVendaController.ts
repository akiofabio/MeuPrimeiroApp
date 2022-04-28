import { Request, Response } from "express";
import "express-async-errors";
import { CreateVendaService } from "../../services/venda/CreateVendaService";

class CreateVendaController {

    async handle(request: Request, response: Response) {
        const createService = new CreateVendaService();
        const {  id_produto, id_cliente, quantidade, totalBruto , desconto, valorTotal } = request.body;
        const venda = await createService.execute({
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
export { CreateVendaController };