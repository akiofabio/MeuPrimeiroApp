import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";
import { json } from "express";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IUserRequest {
    id: string;
}
class FindUserByIdService {
    async execute({id}:IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepository);
        const user = await usersRepository.findOne({
            id,
        });
        if(!user){
            throw new Error("User não encontrado");
        }
        return user;
    }
}

export { FindUserByIdService };