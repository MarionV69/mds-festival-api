import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Edition } from './edition.entity';
import { Place } from 'src/sites/entities/place.entity';
import { Event } from './event.entity';

@Entity()
export class Scene {
  @PrimaryGeneratedColumn()
  id_scene: number;

  @ManyToOne(() => Edition, (edition) => edition.scenes)
  edition: Edition;

  @ManyToOne(() => Place, (place) => place.scenes)
  place: Place;

  @OneToMany(() => Event, (event) => event.scene)
  events: Event[];

  @Column({ type: 'int' })
  capacity: number;
}
