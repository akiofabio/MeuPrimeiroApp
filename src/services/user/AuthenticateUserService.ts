import { compare } from "bcryptjs";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepository } from "../../repositories/UsersRepository";
import { getCustomRepository } from "typeorm";
interface IAuthenticateRequest {
    email: string;
    senha: string;
}

class AuthenticateUserService {
    async execute({ email, senha }: IAuthenticateRequest) {
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne({
            email,
        });
      
        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = await compare(senha, user.senha);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }



        // Gerar token
        const token = sign(
            {
              email: user.email,
            },
            "4f93ac9d10cb751b8c9c646bc9dbccb9",
            {
              subject: user.id,
              expiresIn: "1d",
            }
          );
    
        return token;
    }
}

export { AuthenticateUserService };
