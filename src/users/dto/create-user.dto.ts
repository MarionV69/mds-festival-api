/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';
import { Role } from '../entities/user.entity';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  password: string;

  @IsDefined()
  role: Role;
}
