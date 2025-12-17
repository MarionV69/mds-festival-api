import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Festivalier } from 'src/festivaliers/entities/festivalier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Festivalier])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
