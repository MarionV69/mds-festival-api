import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Edition } from './edition.entity';
import { Scene } from './scene.entity';
import { Artist } from 'src/artists/entities/artist.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id_event: number;

  @ManyToMany(() => Artist)
  @JoinTable()
  artists: Artist[];

  @ManyToOne(() => Edition, (edition) => edition.events)
  edition: Edition;

  @ManyToOne(() => Scene, (scene) => scene.events)
  scene: Scene;

  @Column({ length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'datetime' })
  start: Date;

  @Column({ type: 'datetime' })
  end: Date;
}
