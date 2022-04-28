import { classToPlain } from "class-transformer";
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { ClienteRepository } from "../../repositories/ClienteRepository";

interface IClienteRequest {
    id: string;
}

class FindClienteByIdService {
    async execute({id}:IClienteRequest) {
        const clienteRepository =  getCustomRepository(ClienteRepository);
        
        const cliente= await clienteRepository.findOne({
            id,
        });
        if(!cliente){
            throw new Error(" Cliente não encontrado");
        }
        return cliente;
    }
}

export { FindClienteByIdService };