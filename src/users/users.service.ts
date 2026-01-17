import {
  BadRequestException,
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

  async create(dto: CreateUserDto): Promise<User> {
    try {
      const salt = Number(process.env['HASH_SALT'] ?? 12);
      const { password, ...rest } = dto;
      const hash = await bcrypt.hash(password, salt);
      return this.users.save({ ...rest, hash });
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

  async findByEmail(email: string): Promise<User> {
    const found = await this.users.findOneBy({ email });
    if (!found) throw new NotFoundException();
    return found;
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    if (!dto.password)
      throw new BadRequestException('Password is needed to update a user');
    try {
      const salt = Number(process.env['HASH_SALT'] ?? 12);
      const hash = await bcrypt.hash(dto.password, salt);
      delete dto.password;
      await this.users.update(id, { ...dto, hash });
      return this.findOne(id);
    } catch (error) {
      throw error instanceof NotFoundException
        ? error
        : new ConflictException();
    }
  }

  async remove(id: number): Promise<void> {
    const done = await this.users.delete(id);
    if (done.affected != 1) throw new NotFoundException();
  }
}
