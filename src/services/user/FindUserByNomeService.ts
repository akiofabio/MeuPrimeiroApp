import { classToPlain } from "class-transformer";
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/UsersRepository";
import { instanceToPlain } from "class-transformer";

interface IUserRequest {
    nome: string;
}

class FindUserByNomeService {
    async execute({nome}:IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepository);
        const user = await usersRepository.findOne({
            nome,
        });
        if(!user){
            throw new Error("User não encontrado");
        }
        return instanceToPlain(user);
    }
}

export { FindUserByNomeService };