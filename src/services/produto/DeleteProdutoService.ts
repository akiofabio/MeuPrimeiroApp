import { classToPlain } from "class-transformer";
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { ProdutoRepository } from "../../repositories/ProdutoRepository";

interface IProdutoDelete {
    id: string;
}
class DeleteProdutoService {
    async execute({id}:IProdutoDelete) {
        const produtoRepository =  getCustomRepository(ProdutoRepository);
        const produtoExist = await produtoRepository.findOne({
            id,
        });
        if (!produtoExist) {
            throw new Error("Produto não encontrado");
        }

        return await produtoRepository.delete(id).then(
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

export { DeleteProdutoService };