import { VendaRepository } from "../../repositories/VendaRepository";
import { getCustomRepository } from "typeorm";

interface IVendaRequest{
    id_produto: string;
    id_cliente: string;
    quantidade: string;
    totalBruto: string;
    desconto: string;
    valorTotal: string;
}

class CreateVendaService {
    async execute({ id_produto, id_cliente, quantidade, totalBruto , desconto, valorTotal }: IVendaRequest) {
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
        const venda = vendaRepository.create({
            id_produto,
            id_cliente,
            quantidade,
            totalBruto,
            desconto,
            valorTotal
        })
        await vendaRepository.save(venda);
        return venda;
    }
}
export { CreateVendaService };
