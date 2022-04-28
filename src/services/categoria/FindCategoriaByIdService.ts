import { classToPlain } from "class-transformer";
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { CategoriaRepository } from "../../repositories/CategoriaRepository";

interface ICategoriaRequest {
    id: string;
}
class FindCategoriaByIdService {
    async execute({id}:ICategoriaRequest) {
        const categoriaRepository = getCustomRepository(CategoriaRepository);
        
        const categoria= await categoriaRepository.findOne({
            id,
        });
        if(!categoria){
            throw new Error("Categoria não encontrada");
        }
        return categoria;
    }
}

export { FindCategoriaByIdService };