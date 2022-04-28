import { getCustomRepository } from "typeorm";
import { CategoriaRepository } from "../../repositories/CategoriaRepository";

interface ICategoriaRequest{
    nome: string;
    descricao: string;
}

class CreateCategoriaService {
    async execute({ nome , descricao }: ICategoriaRequest) {
        
        const categoriaRepository = getCustomRepository(CategoriaRepository);

        if (!nome) {
            throw new Error("Nome Obrigatorio");
        }
        
        const nomeAlreadyExists = await categoriaRepository.findOne({nome});

        if (nomeAlreadyExists) {
            throw new Error("A Categoria já existe");
        }

        const categoria = categoriaRepository.create({
            nome, 
            descricao
        })
        await categoriaRepository.save(categoria);
        return categoria;
    }
  }
  export { CreateCategoriaService };