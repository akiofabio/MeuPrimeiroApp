import { Request, Response } from "express";
import { FindClienteByIdService } from "../../services/cliente/FindClienteByIdService";

class FindClienteByIdController {
    async handle(request: Request, response: Response) {
        const findService = new FindClienteByIdService();
        const id = request.params.id;
        const cliente = await findService.execute({id});

        return response.json(cliente);
    }
}

export { FindClienteByIdController };