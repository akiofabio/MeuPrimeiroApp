import { classToPlain } from "class-transformer";
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { CategoriaRepository } from "../../repositories/CategoriaRepository";

interface ICategoriaRequest {
    nome: string;
}

class FindCategoriaByNomeService {
    async execute({nome}:ICategoriaRequest) {
        const categoriaRepository = getCustomRepository(CategoriaRepository);
        const categoria= await categoriaRepository.findOne({
            nome,
        });
        if(!categoria){
            throw new Error("Categoria não encontrada");
        }
        return categoria;
    }
}

export { FindCategoriaByNomeService };