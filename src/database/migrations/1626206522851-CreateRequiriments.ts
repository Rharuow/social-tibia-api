import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRequiriments1626206522851 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'requiriments',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: 'now()'
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: 'now()'
                },
                {
                    name: 'charId',
                    type: 'uuid'
                }
            ],
            foreignKeys: [
                {
                    name: 'FKCharRequiriment',
                    columnNames: ['charId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'chars',
                    onDelete: 'SET NULL',
                    onUpdate: 'SET NULL'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('requiriments')
    }

}
