import { classToPlain } from "class-transformer";
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { ProdutoRepository } from "../../repositories/ProdutoRepository";

interface IProdutoRequest {
    id: string;
}

class FindProdutoByIdService {
    async execute({id}:IProdutoRequest) {
        const produtoRepository =  getCustomRepository(ProdutoRepository);
        const produto = await produtoRepository.findOne({
            id,
        });
        if(!produto){
            throw new Error(" Produto não encontrado");
        }
        return produto;
    }
}

export { FindProdutoByIdService };