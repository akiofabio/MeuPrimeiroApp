import { classToPlain } from "class-transformer";
import { json } from "express";
import { VendaRepository } from "../../repositories/VendaRepository";
import { getCustomRepository } from "typeorm";
import { instanceToPlain } from "class-transformer";

interface IVendaRequest {
    id_produto: string;
}

class FindVendaByProdutoService {
    async execute({id_produto}:IVendaRequest) {
        const vendaRepository =  getCustomRepository(VendaRepository);
        const venda = await vendaRepository.find({
            id_produto,
        });
        if(venda.length==0){
            throw new Error("Venda não encontrado");
        }
        return instanceToPlain(venda);
    }
}

export { FindVendaByProdutoService };