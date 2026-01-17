import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import { Place } from './entities/place.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Site, Place])],
  controllers: [SitesController],
  providers: [SitesService],
})
export class SitesModule {}
