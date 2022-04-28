import { getCustomRepository } from "typeorm";
import { CategoriaRepository } from "../../repositories/CategoriaRepository";


interface ICategoriaRequest {
    id: string;
    nome: string;
    descricao: string;
}
  
class UpdateCategoriaService {
    async execute({ id , nome , descricao }: ICategoriaRequest) {
        const categoriaRepository = getCustomRepository(CategoriaRepository);
        

        if (!nome) {
            throw new Error("Nome Obrigatorio");
        }
        
        const categoriaAlreadyExists = await categoriaRepository.findOne({id});

        if (!categoriaAlreadyExists) {
            throw new Error("Categoria não encontrada");
        }

        categoriaAlreadyExists.nome = nome;
        categoriaAlreadyExists.descricao = descricao;
        categoriaAlreadyExists.updated_at=new Date()
        return await categoriaRepository.update(id,categoriaAlreadyExists)
        .then(
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
export { UpdateCategoriaService };