import { Request, Response } from "express";
import { DeleteCategoriaService } from "../../services/categoria/DeleteCategoriaService";

class DeleteCategoriaController {
    async handle(request: Request, response: Response) {
        const deleteService = new DeleteCategoriaService();
        const id = request.params.id;
        const categoria = await deleteService.execute({id});

        return response.json(categoria);
    }
}

export { DeleteCategoriaController };