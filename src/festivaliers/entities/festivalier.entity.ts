import { User } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @OneToOne(() => User)
  @JoinTable()
  user: User;
}
