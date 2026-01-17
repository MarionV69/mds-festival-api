import { User } from '..//users/entities/user.entity';
import { Role } from '../users/enums/role.enum';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { faker } from '@faker-js/faker';

const PEOPLE = 8;

export class Mock1768666000438 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(
      queryRunner.manager.create<User, Partial<User>>(User, {
        email: 'j.doe@fake.com',
        hash: '$2a$12$jEiAJGQ3RP.EnuotFuA6/en9C9Um/47eno712myZ8brBLUZKH.epK',
        lastname: 'DOE',
        firstname: 'John',
        role: Role.Admin,
      }),
    );
    for (let i = 1; i <= PEOPLE; i++) {
      await queryRunner.manager.save(
        queryRunner.manager.create<User, Partial<User>>(User, {
          email: faker.internet.email(),
          hash: '$2a$12$zDxupdYzdEXXmKk9w7Whh.N3oCTtb0u3tFKYXlV87EvepDUcuQawq',
          lastname: faker.person.lastName(),
          firstname: faker.person.firstName(),
          role: Role.Spectator,
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM Users');
  }
}
