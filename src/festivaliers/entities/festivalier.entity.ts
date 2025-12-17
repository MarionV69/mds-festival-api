import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Status {
  CHILD = 'child',
  STUDENT = 'student',
  ADULT = 'adult',
}

@Entity()
export class Festivalier {
  @PrimaryGeneratedColumn()
  id_festivalier: number;

  @Column({ type: 'enum', enum: Status })
  status: Status;
}
