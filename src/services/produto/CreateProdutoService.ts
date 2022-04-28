import { getCustomRepository } from "typeorm";
import { ProdutoRepository } from "../../repositories/ProdutoRepository";

interface IProdutoRequest{
    nome: string;
    descricao: string;
    preco: string;
    id_categoria: string;
}

class CreateProdutoService {
    async execute({ nome , descricao , preco , id_categoria }: IProdutoRequest) {
        const produtoRepository =  getCustomRepository(ProdutoRepository);

        if(!nome){
            throw new Error("Nome Obrigatorio");
        }
        if(!descricao){
            throw new Error("Descrição Obrigatoria");
        }
        if(!descricao){
            throw new Error("Preço Obrigatorio");
        }
        if(!id_categoria){
            throw new Error("Categoria Obrigatoria");
        }

        const nomeAlreadyExists = await produtoRepository.findOne({nome});
        if(nomeAlreadyExists){
            throw new Error("Produto já Existente");
        }

        const produto = produtoRepository.create({
            nome,
            descricao,
            preco,
            id_categoria
        })
        
        await produtoRepository.save(produto);
        return produto;
    }
}
export { CreateProdutoService };
