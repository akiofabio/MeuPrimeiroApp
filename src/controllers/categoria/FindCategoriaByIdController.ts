import { Request, Response } from "express";
import { FindCategoriaByIdService } from "../../services/categoria/FindCategoriaByIdService";

class FindCategoriaByIdController {
    async handle(request: Request, response: Response) {
        const findService = new FindCategoriaByIdService();
        const id = request.params.id;
        const categoria = await findService.execute({id});

        return response.json(categoria);
    }
}

export { FindCategoriaByIdController };