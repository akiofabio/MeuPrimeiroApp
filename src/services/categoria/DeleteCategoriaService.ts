import { classToPlain } from "class-transformer";
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { CategoriaRepository } from "../../repositories/CategoriaRepository";

interface ICategoriaDelete {
    id: string;
}
class DeleteCategoriaService {
    async execute({id}:ICategoriaDelete) {
        const categoriaRepository = getCustomRepository(CategoriaRepository);

        const categoriaAlreadyExists = await categoriaRepository.findOne({
            id,
        });

        if (!categoriaAlreadyExists) {
            throw new Error("Categoria não encontrada");
        }

        return await categoriaRepository.delete(id).then(
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

export { DeleteCategoriaService };