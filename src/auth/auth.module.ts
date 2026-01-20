import { Module } from '@nestjs/common';
import { TokenController } from './token/token.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { MyBasicStrategy } from './security/strategies/my-basic.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'banane',
      signOptions: {
        audience: process.env.JWT_AUDIENCE || 'my-festival.com',
      },
    }),
  ],
  controllers: [TokenController],
  providers: [UsersService, MyBasicStrategy],
})
export class AuthModule {}
