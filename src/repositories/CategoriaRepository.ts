import { EntityRepository, Repository } from "typeorm";
import { Categoria } from "../entities/Categoria";

@EntityRepository(Categoria)
class CategoriaRepository extends Repository<Categoria> {}

export { CategoriaRepository };
