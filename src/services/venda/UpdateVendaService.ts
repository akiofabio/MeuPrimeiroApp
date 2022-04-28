import { VendaRepository } from "../../repositories/VendaRepository";
import { getCustomRepository } from "typeorm";

interface IVendaRequest{
    id: string;
    id_produto: string;
    id_cliente: string;
    quantidade: string;
    totalBruto: string;
    desconto: string;
    valorTotal: string;
}
  
class UpdateVendaService {
    async execute({ id , id_produto , id_cliente , quantidade,  totalBruto , desconto , valorTotal }: IVendaRequest) {
        const vendaRepository =  getCustomRepository(VendaRepository);
        if(!id_produto){
            throw new Error("Produto Obrigatorio");
        }
        if(!id_cliente){
            throw new Error("Cliente Obrigatorio");
        }
        if(!quantidade){
            throw new Error("Quantidade Obrigatorio");
        }
        if(!totalBruto){
            throw new Error("Total Bruto Obrigatorio");
        }
        if(!desconto){
            throw new Error("Desconto Obrigatorio");
        }
        if(!valorTotal){
            throw new Error("Valor Total Obrigatorio");
        }

        const vendaAlreadyExists = await vendaRepository.findOne({
            id,
        });
    
        if (!vendaAlreadyExists) {
            throw new Error("Cliente não encontrado")
        }
        
        vendaAlreadyExists.id_cliente=id_cliente;
        vendaAlreadyExists.id_produto=id_produto;
        vendaAlreadyExists.quantidade=quantidade;
        vendaAlreadyExists.totalBruto=totalBruto;
        vendaAlreadyExists.desconto=desconto;
        vendaAlreadyExists.valorTotal=valorTotal;
        vendaAlreadyExists.updated_at=new Date;
         
        return await vendaRepository.save(vendaAlreadyExists).then(
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
export { UpdateVendaService };