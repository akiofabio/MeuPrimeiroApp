import { classToPlain } from "class-transformer";
import { json } from "express";
import { VendaRepository } from "../../repositories/VendaRepository";
import { getCustomRepository } from "typeorm";
import { instanceToPlain } from "class-transformer";

interface IVendaRequest {
    id_cliente: string;
}

class FindVendaByClienteService {
    async execute({id_cliente}:IVendaRequest) {
        const vendaRepository =  getCustomRepository(VendaRepository);
        const venda = await vendaRepository.find({
            id_cliente,
        });
        if(venda.length==0){
            throw new Error("Venda não encontrado");
        }
        return instanceToPlain(venda);
    }
}
export { FindVendaByClienteService };