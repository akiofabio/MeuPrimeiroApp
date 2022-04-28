import { Request, Response } from "express";
import "express-async-errors";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response) {
        const { nome, email, admin, senha } = request.body;
  
        const createUserService = new CreateUserService();
  
        const user = await createUserService.execute({
            nome,
            email,
            admin,
            senha,
        });
  
        return response.json(user);
    }
}
export { CreateUserController };