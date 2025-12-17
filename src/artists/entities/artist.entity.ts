import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn()
  id_artist: number;

  @Column({ length: 100 })
  name: string;

  @Column({ nullable: true, type: 'text' })
  presentation: string;
}
