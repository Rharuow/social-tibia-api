import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateChars1626048384864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.createTable(new Table({
             name: 'chars',
             columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'voc',
                    type: 'enum',
                    enum: ['ek', 'ms', 'ed', 'rp']
                },
                {
                    name: 'residence',
                    type: 'varchar',
                },
                {
                    name: 'sex',
                    type: 'enum',
                    enum: ['M', 'F']
                },
                {
                    name: 'last_login',
                    type: 'varchar',
                },
                {
                    name: 'account_status',
                    type: 'boolean',
                },
                {
                    name: 'status',
                    type: 'boolean',
                },
                {
                    name: 'level',
                    type: 'int',
                },
                {
                    name: 'max_lvl_shared',
                    type: 'int',
                },
                {
                    name: 'min_lvl_shared',
                    type: 'int',
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
                    name: 'own',
                    type: 'uuid'
                }
            ],
            foreignKeys: [
                {
                    name: 'FKUserChar',
                    columnNames: ['own'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onDelete: 'SET NULL',
                    onUpdate: 'SET NULL',
                }
            ]
         }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('chars')
    }

}
