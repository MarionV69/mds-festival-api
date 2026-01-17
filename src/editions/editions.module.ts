import { Module } from '@nestjs/common';
import { EditionsService } from './editions.service';
import { EditionsController } from './editions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Edition } from './entities/edition.entity';
import { Festival } from './entities/festival.entity';
import { Event } from './entities/event.entity';
import { Scene } from './entities/scene.entity';
import { Stand } from './entities/stand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Edition, Festival, Event, Scene, Stand])],
  controllers: [EditionsController],
  providers: [EditionsService],
})
export class EditionsModule {}
