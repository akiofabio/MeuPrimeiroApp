import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";
  
@Entity("vendas")
class Venda {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
    id_produto!: string;
  
    @Column()
    id_cliente!: string;
  
    @Column()
    quantidade!: string;

    @Column()
    totalBruto!: string;
    
    @Column()
    desconto!: string;

    @Column()
    valorTotal!: string;
 
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;
  
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
  
export { Venda };