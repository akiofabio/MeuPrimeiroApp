import { Request, Response } from "express";
import "express-async-errors";
import { CreateCategoriaService } from "../../services/categoria/CreateCategoriaService";

class CreateCategoriaController {

    async handle(request: Request, response: Response) {
        const createService = new CreateCategoriaService();
        const { nome , descricao } = request.body;
        const categoria = await createService.execute({
            nome, 
            descricao
        });
  
        return response.json(categoria);
    }
}
export { CreateCategoriaController };