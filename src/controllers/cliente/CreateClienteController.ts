import { Request, Response } from "express";
import "express-async-errors";
import { CreateClienteService } from "../../services/cliente/CreateClienteService";

class CreateClienteController {

    async handle(request: Request, response: Response) {
        const createService = new CreateClienteService();
        const { nome , telefone , email , senha , cpf , endereco , cidade , estado , bairro } = request.body;
        const cliente = await createService.execute({
            nome,
            telefone,
            email,
            senha,
            cpf,
            endereco,
            cidade,
            estado,
            bairro
        });
  
        return response.json(cliente);
    }
}
export { CreateClienteController };