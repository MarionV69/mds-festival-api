import { Injectable } from '@nestjs/common';
import { CreateFestivalierDto } from './dto/create-festivalier.dto';
import { UpdateFestivalierDto } from './dto/update-festivalier.dto';

@Injectable()
export class FestivaliersService {
  create(createFestivalierDto: CreateFestivalierDto) {
    return 'This action adds a new festivalier';
  }

  findAll() {
    return `This action returns all festivaliers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} festivalier`;
  }

  update(id: number, updateFestivalierDto: UpdateFestivalierDto) {
    return `This action updates a #${id} festivalier`;
  }

  remove(id: number) {
    return `This action removes a #${id} festivalier`;
  }
}
