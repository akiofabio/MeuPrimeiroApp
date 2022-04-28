import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { ClienteRepository } from "../../repositories/ClienteRepository";

interface IClienteRequest{
    nome: string;
    telefone: string;
    email: string; 
    senha: string; 
    cpf: string; 
    endereco: string; 
    cidade: string; 
    estado: string; 
    bairro: string;
}

class CreateClienteService {
    async execute({ nome , telefone , email , senha , cpf , endereco , cidade , estado , bairro }: IClienteRequest) {
        const clienteRepository =  getCustomRepository(ClienteRepository);
        
        if (!nome) {
            throw new Error("Nome Obrigatorio");
        }

        if (!senha) {
            throw new Error("Senha Obrigatorio");
        }

        if (!cpf) {
            throw new Error("CPF Obrigatorio");
        }

        
        
        const cpfAlreadyExists = await clienteRepository.findOne({cpf});
        if (cpfAlreadyExists) {
            throw new Error("CPF: " + cpf + " já Cadastrado");
        }
        
        const senhadHash = await hash(senha, 8);

        const cliente =  clienteRepository.create({
            nome,
            telefone,
            email, 
            senha: senhadHash, 
            cpf, 
            endereco, 
            cidade, 
            estado, 
            bairro
        })
        await clienteRepository.save(cliente);
        return cliente;
    }
  }
  export { CreateClienteService };