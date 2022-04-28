import { Request, Response } from "express";
import { DeleteClienteService } from "../../services/cliente/DeleteClienteService";

class DeleteClienteController {
    async handle(request: Request, response: Response) {
        const deleteService = new DeleteClienteService();
        const id= request.params.id;
        const cliente = await deleteService.execute({id});

        return response.json(cliente);
    }
}

export { DeleteClienteController };