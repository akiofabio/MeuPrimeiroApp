import { Request, Response } from "express";
import { AuthenticateUserService } from "../../services/user/AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, senha } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
        email,
        senha,
        });

        return response.json(token);
    }
}

export { AuthenticateUserController };

