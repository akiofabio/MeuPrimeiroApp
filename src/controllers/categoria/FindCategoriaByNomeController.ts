import { Request, Response } from "express";
import { FindCategoriaByNomeService } from "../../services/categoria/FindCategoriaByNomeService";

class FindCategoriaByNomeController {
    async handle(request: Request, response: Response) {
        const listService = new FindCategoriaByNomeService();
        const {nome} = request.body;
        const categoria = await listService.execute({nome});

        return response.json(categoria);
    }
}

export { FindCategoriaByNomeController };