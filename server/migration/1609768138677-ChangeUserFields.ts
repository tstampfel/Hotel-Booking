import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeUserFields1609768138677 implements MigrationInterface {
    name = 'ChangeUserFields1609768138677'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isConfirmed" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isConfirmed"`);
    }

}
