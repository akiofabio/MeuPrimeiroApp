import { classToPlain } from "class-transformer";
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { ProdutoRepository } from "../../repositories/ProdutoRepository";

interface IProdutoRequest {
    nome: string;
}

class FindProdutoByNomeService {
    async execute({nome}:IProdutoRequest) {
        const produtoRepository =  getCustomRepository(ProdutoRepository);
        const produto = await produtoRepository.findOne({
            nome,
        });
        if(!produto){
            throw new Error("Produto não encontrado");
        }
        return produto;
    }
}

export { FindProdutoByNomeService
 };