import { getCustomRepository } from "typeorm";
import { ClienteRepository } from "../../repositories/ClienteRepository";
import { hash } from "bcryptjs";

interface IClienteRequest {
    id: string;
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
  
class UpdateClienteService {
  async execute({ id, nome , telefone , email , senha , cpf , endereco , cidade , estado , bairro }: IClienteRequest) {
    const clienteRepository =  getCustomRepository(ClienteRepository);
    if (!id) {
        throw new Error("id obrigatorio");
    } 

    if (!nome) {
        throw new Error("Nome obrigatorio");
    }

    if (!senha) {
        throw new Error("Senha Obrigatorio");
    }

    if (!cpf) {
        throw new Error("CPF Obrigatorio");
    }
    
    const cpfAlreadyExists = await clienteRepository.findOne({
        cpf,
    });
    if ((cpfAlreadyExists) && (cpfAlreadyExists.id!=id)) {
        throw new Error("CPF: " + cpf + " já Cadastrado");
    }

    const clienteAlreadyExists = await clienteRepository.findOne({
        id,
    });

    if (!clienteAlreadyExists) {
        throw new Error("Cliente não encontrado")
    }
    const passwordHash = await hash(senha, 8)
    clienteAlreadyExists.nome=nome
    clienteAlreadyExists.email=email
    clienteAlreadyExists.senha=passwordHash
    clienteAlreadyExists.telefone=telefone
    clienteAlreadyExists.cpf=cpf
    clienteAlreadyExists.endereco=endereco
    clienteAlreadyExists.cidade
    clienteAlreadyExists.estado
    clienteAlreadyExists.bairro
    clienteAlreadyExists.updated_at=new Date()
    
    
    return await clienteRepository.update(id,clienteAlreadyExists).then(
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
export { UpdateClienteService };