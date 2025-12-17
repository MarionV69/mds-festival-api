import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Festival } from './festival.entity';
import { Event } from './event.entity';
import { Site } from 'src/sites/entities/site.entity';
import { Stand } from './stand.enity';
import { Scene } from './scene.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Edition {
  @PrimaryGeneratedColumn()
  id_edition: number;

  @ManyToOne(() => Festival, (festival) => festival.editions)
  festival: Festival;

  @ManyToOne(() => Site, (site) => site.editions)
  site: Site;

  @OneToMany(() => Event, (event) => event.edition)
  events: Event[];

  @OneToMany(() => Stand, (stand) => stand.edition)
  stands: Stand[];

  @OneToMany(() => Scene, (scene) => scene.edition)
  scenes: Scene[];

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @Column({ type: 'datetime' })
  debut: Date;

  @Column({ type: 'int' })
  nb_jours: number;
}
