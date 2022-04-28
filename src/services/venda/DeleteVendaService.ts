import { classToPlain } from "class-transformer";
import { json } from "express";
import { VendaRepository } from "../../repositories/VendaRepository";
import { getCustomRepository } from "typeorm";


interface IVendaDelete {
    id: string;
}
class DeleteVendaService {
    async execute({id}:IVendaDelete) {
        const vendaRepository =  getCustomRepository(VendaRepository);
        const vendaExist = await vendaRepository.findOne({
            id,
        });
        if (!vendaExist) {
            throw new Error("Venda não encontrado");
        }

        return await vendaRepository.delete(id).then(
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

export { DeleteVendaService };