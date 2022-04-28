import { classToPlain } from "class-transformer";
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { ClienteRepository } from "../../repositories/ClienteRepository";

interface IClienteDelete {
    id: string;
}
class DeleteClienteService {
    async execute({id}:IClienteDelete) {
        const clienteRepository =  getCustomRepository(ClienteRepository);
        
        const clienteAlreadyExists = await clienteRepository.findOne({
            id,
        });
        if (!clienteAlreadyExists) {
            throw new Error("Cliente não encontrado");
        }

        return await clienteRepository.delete(id).then(
            f =>{
                console.log(f);
                var messagmsgeDelete = {
                    message:"Registro excluido com sucesso"
                }
            
                return messagmsgeDelete;
            }, 
            err => {
                throw new Error("Erro na exclusão");
            }
        );
    }
}

export { DeleteClienteService };