import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnTask1627600926582 implements MigrationInterface {
    name = 'addColumnTask1627600926582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD "complete" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "complete"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "name"`);
    }

}
