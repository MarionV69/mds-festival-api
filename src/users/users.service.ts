import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import bcrypt from 'node_modules/bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private users: Repository<User>) {}
  $;

  async create(createUserDto: CreateUserDto) {
    try {
      const salt = process.env['HASH_SALT'] || 12;
      const hash = await bcrypt.hash(createUserDto.password, salt);
      return this.users.save({ ...createUserDto, hash });
    } catch {
      throw new ConflictException();
    }
  }

  findAll(): Promise<User[]> {
    return this.users.find();
  }

  async findOne(id: number): Promise<User> {
    const found = await this.users.findOneBy({ id });
    if (!found) throw new NotFoundException();
    return found;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
