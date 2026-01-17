import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enums/role.enum';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'id_user' })
  id: number;

  @Index({ unique: true })
  @Column({ length: 150 })
  email: string;

  @Exclude()
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
