import { Request, Response } from "express";
import { FindClienteByEndercoService } from "../../services/cliente/FindClienteByEndercoService";

class FindClienteByEndercoController {
    async handle(request: Request, response: Response) {
        const findService = new FindClienteByEndercoService();
        const { endereco , cidade , estado , bairro } = request.body;
        const cliente = await findService.execute({ endereco , cidade , estado , bairro });

        return response.json(cliente);
    }
}

export { FindClienteByEndercoController };