import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClientes1649514380594 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clientes",
                columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "nome",
                    type: "varchar",
                },
                {
                    name: "telefone",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "senha",
                    type: "varchar",
                },
                {
                    name: "cpf",
                    type: "varchar",
                },
                {
                    name: "endereco",
                    type: "varchar",
                },
                {
                    name: "cidade",
                    type: "varchar",
                },
                {
                    name: "estado",
                    type: "varchar",
                },
                {
                    name: "bairro",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
              ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categorias");
    }

}
