import { EntityRepository, Repository } from "typeorm";
import { Venda } from "../entities/Venda";

@EntityRepository(Venda)
class VendaRepository extends Repository<Venda> {}

export { VendaRepository };
