import { Request, Response } from "express";
import { FindUserByNomeService } from "../../services/user/FindUserByNomeService";

class FindUserByNomeController {
    async handle(request: Request, response: Response) {
        const findService = new FindUserByNomeService();
        const nome= request.params.nome;
        const produto = await findService.execute({nome});

        return response.json(produto);
    }
}

export { FindUserByNomeController };