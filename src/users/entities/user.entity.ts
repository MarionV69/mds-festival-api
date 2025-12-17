import { Festivalier } from 'src/festivaliers/entities/festivalier.entity';
import {
  Column,
  Entity,
  Index,
  JoinTable,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Role {
  Admin = 'ADMIN',
  Staff = 'STAFF',
  Guest = 'GUEST',
  Trader = 'TRADER',
  Performer = 'PERFORMER',
  Spectator = 'SPECTATOR',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'id_user' })
  id: number;

  @OneToOne(() => Festivalier)
  @JoinTable()
  festivalier: Festivalier;

  @Index({ unique: true })
  @Column({ length: 150 })
  email: string;

  @Index()
  @Column({ length: 150 })
  hash: string;

  @Column({ length: 200 })
  lastname: string;

  @Column({ length: 200 })
  firstname: string;

  @Column({ type: 'enum', enum: Role, default: Role.Spectator })
  role: Role;
}
