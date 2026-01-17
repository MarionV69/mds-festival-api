import { Scene } from '../../editions/entities/scene.entity';
import { Stand } from '../../editions/entities/stand.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Site } from './site.entity';

export enum Type {
  OUTDOOR = 'outdoor',
  SALLE = 'salle',
  SANITAIRES = 'sanitaires',
  HALL = 'hall',
  AMPHITHEATRE = 'amphitheatre',
  CHAPITEAU = 'chapiteau',
  BACKSTAGE = 'backstage',
  LOGES = 'loges',
}

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id_place: number;

  @ManyToOne(() => Site, (site) => site.places)
  site: Site;

  @OneToMany(() => Stand, (stand) => stand.place)
  stands: Stand[];

  @OneToMany(() => Scene, (scene) => scene.place)
  scenes: Scene[];

  @Column({ length: 255, unique: true })
  name: string;

  @Column({ type: 'polygon', nullable: true })
  zone: string;

  @Column({ type: 'enum', enum: Type })
  type: Type;
}
