import { getCustomRepository } from "typeorm";
import { ProdutoRepository } from "../../repositories/ProdutoRepository";

interface IProdutoRequest{
    id: string;
    nome: string;
    descricao: string;
    preco: string;
    id_categoria: string;
}
  
class UpdateProdutoService {
    async execute({ id, nome , descricao , preco , id_categoria}: IProdutoRequest) {
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
        if((nomeAlreadyExists) && (nomeAlreadyExists.id!=id)){
            throw new Error("Produto já Existente");
        }

        const produtoAlreadyExists = await produtoRepository.findOne({
            id,
        });
        if (!produtoAlreadyExists) {
            throw new Error("Produto não encontrado")
        }

        produtoAlreadyExists.nome=nome;
        produtoAlreadyExists.descricao=descricao;
        produtoAlreadyExists.preco=preco;
        produtoAlreadyExists.id_categoria=id_categoria;
        produtoAlreadyExists.updated_at=new Date();
        
        return await produtoRepository.update(id,produtoAlreadyExists).then(
            f => {
                console.log(f);
                var messagmsgeUpdade = {
                    message:"Registro atualizado com sucesso"
                }
                return messagmsgeUpdade;
            
            }, 
            err => {
                throw new Error("Erro na atualização");
            }
        );
  }
}
export { UpdateProdutoService };