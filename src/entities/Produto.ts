import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";
  
@Entity("produtos")
class Produto {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
    nome!: string;
  
    @Column()
    descricao!: string;
    
    @Column()
    preco!: string;

    @Column()
    id_categoria!: string;

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
  
export { Produto };