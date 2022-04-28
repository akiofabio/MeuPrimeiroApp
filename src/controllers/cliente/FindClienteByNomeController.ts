import { Request, Response } from "express";
import { FindClienteByNomeService } from "../../services/cliente/FindClienteByNomeService";

class FindClienteByNomeController {
    async handle(request: Request, response: Response) {
        const findService = new FindClienteByNomeService();
        const nome= request.params.nome;
        const cliente = await findService.execute({nome});

        return response.json(cliente);
    }
}

export { FindClienteByNomeController };