import { Request, Response } from "express";
import { UpdateClienteService } from "../../services/cliente/UpdateClienteService";

class UpdateClienteController {

    async handle(request: Request, response: Response) {
        const updateService = new UpdateClienteService();
        const { id , nome , telefone , email , senha , cpf , endereco , cidade , estado , bairro } = request.body;
        const cliente = await updateService.execute({
            id,
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

export { UpdateClienteController };