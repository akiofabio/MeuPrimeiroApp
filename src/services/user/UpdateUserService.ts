import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/UsersRepository";
import { hash } from "bcryptjs";

interface IUserRequest {
    id: string;
    nome: string;
    admin: boolean;
    senha: string;
}
  
class UpdateUserService {
    async execute({ id, nome,  admin , senha }: IUserRequest) {
        
        if (!id) {
            throw new Error("id obrigatorio");
        } 

        if (!nome) {
            throw new Error("Nome obrigatorio");
        }

        if (!senha) {
            throw new Error("Password Obrigatorio");
        }

        const usersRepository = getCustomRepository(UsersRepository);
        
        const userAlreadyExists = await usersRepository.findOne({
            id,
        });

        if (!userAlreadyExists) {
            throw new Error("User not exists")
        }
        const passwordHash = await hash(senha, 8)
        userAlreadyExists.nome=nome
        userAlreadyExists.admin=admin
        userAlreadyExists.updated_at=new Date()
        userAlreadyExists.senha=passwordHash
        
        return await usersRepository.update(id,userAlreadyExists).then(
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
  
export { UpdateUserService };