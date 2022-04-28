import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IUserRequest{
    nome: string;
    email: string;
    admin?: boolean;
    senha: string;
}

class CreateUserService {
    async execute({ nome, email, admin , senha }: IUserRequest) {
        
        const usersRepository = getCustomRepository(UsersRepository);

        if (!email) {
            throw new Error("Email Obrigatorio");
        }
        
        const userAlreadyExists = await usersRepository.findOne({
            email,
        });
  
        if (userAlreadyExists) {
          throw new Error("User already exists");
        }

        const senhadHash = await hash(senha, 8);
        console.log(senhadHash);
        
        const user = usersRepository.create({
            nome, 
            email, 
            admin, 
            senha: senhadHash,
        });
        await usersRepository.save(user);
        return user;
    }
}
export { CreateUserService };
