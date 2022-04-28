import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {

    async handle(request: Request, response: Response) {
        const { id, nome, admin, senha } = request.body;

        const updateUserService = new UpdateUserService();

        const user = await updateUserService.execute({
        id,
        nome,
        admin,
        senha,
        });

        return response.json(user);
    }
}

export { UpdateUserController };