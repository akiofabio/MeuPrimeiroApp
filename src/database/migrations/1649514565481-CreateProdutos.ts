import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProdutos1649514565481 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produtos",
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
                    name: "descricao",
                    type: "varchar",
                },
                {
                    name: "preco",
                    type: "varchar",
                },
                {
                    name: "id_categoria",
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
        await queryRunner.dropTable("produtos");
    }

}
