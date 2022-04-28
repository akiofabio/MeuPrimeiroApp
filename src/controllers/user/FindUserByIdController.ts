import { Request, Response } from "express";
import { FindUserByIdService } from "../../services/user/FindUserByIdService";

class FindUserByIdController {
    async handle(request: Request, response: Response) {
        const findService = new FindUserByIdService();
        const id= request.params.id;
        const produto = await findService.execute({id});

        return response.json(produto);
    }
}

export { FindUserByIdController };