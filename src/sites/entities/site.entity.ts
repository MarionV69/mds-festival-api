import { Edition } from '../../editions/entities/edition.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Place } from './place.entity';

@Entity()
export class Site {
  @PrimaryGeneratedColumn()
  id_site: number;

  @OneToMany(() => Edition, (edition) => edition.site)
  editions: Edition[];

  @OneToMany(() => Place, (place) => place.site)
  places: Place[];

  @Column({ length: 255, unique: true })
  name: string;

  @Column({ length: 255 })
  img: string;

  @Column({ type: 'int' })
  capacity: number;
}
