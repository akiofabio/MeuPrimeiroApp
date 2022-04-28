import { classToPlain } from "class-transformer";
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { ClienteRepository } from "../../repositories/ClienteRepository";
import { instanceToPlain } from "class-transformer";

interface IClienteRequest {
    nome: string;
}

class FindClienteByNomeService {
    async execute({nome}:IClienteRequest) {
        const clienteRepository =  getCustomRepository(ClienteRepository);
        
        const cliente= await clienteRepository.find({
            nome,
        });
        if(cliente.length==0){
            throw new Error(" Cliente não encontrado");
        }
        return instanceToPlain(cliente);
    }
}

export { FindClienteByNomeService };