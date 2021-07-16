import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBoss1626463571165 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "bosses",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "date",
                    type: "timestamp"
                },
                {
                    name: "hour",
                    type: "varchar"
                },
                {
                    name: "location",
                    type: "varchar"
                },
                {
                    name: "status",
                    type: "enum", 
                    enum: ["pending", "done", "accepted"],
                    default: "'pending'",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                },
                ,
                {
                    name: "caller",
                    type: "uuid"
                }
            ],
            foreignKeys: [
                {
                    columnNames: ["caller"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "chars",
                    onDelete: "CASCADE",
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
