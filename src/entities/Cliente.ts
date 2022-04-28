import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";
  
@Entity("clientes")
class Cliente {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
    nome!: string;
         
    @Column()
    telefone!: string;

    @Column()
    email!: string;
    
    @Column()
    senha!: string;
    
    @Column()
    cpf!: string;

    @Column()
    endereco!: string;

    @Column()
    cidade!: string;

    @Column()
    estado!: string;

    @Column()
    bairro!: string;
  
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
  
export { Cliente };