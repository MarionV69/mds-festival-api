import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Edition } from './edition.entity';
import { Place } from 'src/sites/entities/place.entity';

@Entity()
export class Stand {
  @PrimaryGeneratedColumn()
  id_stand: number;

  @ManyToOne(() => Place, (place) => place.stands)
  place: Place;

  @ManyToOne(() => Edition, (edition) => edition.stands)
  edition: Edition;

  @Column({ type: 'datetime' })
  debut: Date;

  @Column({ type: 'int' })
  nb_jours: number;
}
