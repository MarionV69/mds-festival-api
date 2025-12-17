import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Edition } from './edition.entity';

@Entity()
export class Festival {
  @PrimaryGeneratedColumn()
  id_festival: number;

  @OneToMany(() => Edition, (edition) => edition.festival)
  editions: Edition[];

  @Column({ unique: true, length: 100 })
  name: string;
}
