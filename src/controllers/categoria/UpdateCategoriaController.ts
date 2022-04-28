import { Request, Response } from "express";
import { UpdateCategoriaService } from "../../services/categoria/UpdateCategoriaService";

class UpdateCategoriaController {

    async handle(request: Request, response: Response) {
        const updateService = new UpdateCategoriaService();
        const { id, nome , descricao } = request.body;
        const user = await updateService.execute({
            id,
            nome, 
            descricao
        });

        return response.json(user);
    }
}

export { UpdateCategoriaController };