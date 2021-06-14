import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableOrdersProducts1623695542516
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products_orders",
        columns: [
          {
            name: "order_id",
            type: "uuid",
          },
          {
            name: "product_id",
            type: "uuid",
          },
          // {
          //   name: "amount",
          //   type: "numeric",
          //   precision: 10,
          //   scale: 2,
          // },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "products_orders",
      new TableForeignKey({
        name: "FKProductOrder",
        referencedTableName: "products",
        referencedColumnNames: ["id"],
        columnNames: ["product_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "products_orders",
      new TableForeignKey({
        name: "FKOrderProduct",
        referencedTableName: "orders",
        referencedColumnNames: ["id"],
        columnNames: ["order_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("products_orders", "FKOrderProduct");
    await queryRunner.dropForeignKey("products_orders", "FKProductOrder");
    await queryRunner.dropTable("products_orders");
  }
}
