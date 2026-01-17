import { Module } from '@nestjs/common';
import { FestivaliersService } from './festivaliers.service';
import { FestivaliersController } from './festivaliers.controller';
import { Festivalier } from './entities/festivalier.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Festivalier])],
  controllers: [FestivaliersController],
  providers: [FestivaliersService],
})
export class FestivaliersModule {}
