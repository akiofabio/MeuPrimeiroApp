import { classToPlain } from "class-transformer";
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { ClienteRepository } from "../../repositories/ClienteRepository";
import { instanceToPlain } from "class-transformer";

interface IClienteRequest {
    endereco?: string; 
    cidade?: string; 
    estado?: string; 
    bairro?: string;
}

class FindClienteByEndercoService {
    async execute({ endereco , cidade , estado , bairro }:IClienteRequest) {
        const clienteRepository =  getCustomRepository(ClienteRepository);
        
        const cliente= await clienteRepository.find({
            where:[
                {endereco},
                {cidade},
                {estado},
                {bairro}
            ]
            
        });

        if(cliente.length==0){
            throw new Error(" Cliente não encontrado");
        }
        return instanceToPlain(cliente);
    }
}

export { FindClienteByEndercoService };