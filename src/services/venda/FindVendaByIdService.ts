import { classToPlain } from "class-transformer";
import { json } from "express";
import { VendaRepository } from "../../repositories/VendaRepository";
import { getCustomRepository } from "typeorm";

interface IVendaRequest {
    id: string;
}

class FindVendaByIdService {
    async execute({id}:IVendaRequest) {
        const vendaRepository =  getCustomRepository(VendaRepository);
        const venda = await vendaRepository.findOne({
            id,
        });
        if(!venda){
            throw new Error(" Produto não encontrado");
        }
        return venda;
    }
}

export { FindVendaByIdService };