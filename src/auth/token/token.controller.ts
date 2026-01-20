import {
  Controller,
  Get,
  Headers,
  Request,
  // UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
// import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in.dto';
import { AuthGuard } from '@nestjs/passport';
// import { request } from 'http';
import { User } from 'src/users/entities/user.entity';

@Controller('auth/token')
export class TokenController {
  constructor(
    private users: UsersService,
    private jwts: JwtService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('basic'))
  signIn(@Request() request: Request & { user: User }) {
    const user = request.user;
    const cr = new SignInDto();
    cr.scope = '*';
    cr.expires_in = 3600;
    cr.access_token = this.jwts.sign(
      {
        id: user.id,
        role: user.role,
        email: user.email,
      },
      {
        expiresIn: 3600,
        subject: 'festival-api',
      },
    );
    return cr;
  }
  // @Get()
  // async signIn(@Headers('Authorization') auth?: string) {
  //   const args = auth && auth.split(' ');
  //   if (args && args.length == 2 && args[0].toLowerCase() == 'basic') {
  //     const credentials = Buffer.from(args[1], 'base64')
  //       .toString('utf8')
  //       .split(':');

  //     const email = credentials[0];
  //     const password = credentials[1];
  //     const user = await this.users.findByEmail(email);
  //     if (user && (await bcrypt.compare(password, user.hash))) {
  //       const cr = new SignInDto();
  //       cr.expires_in = 3600;
  //       cr.access_token = this.jwts.sign(
  //         {
  //           id: user.id,
  //           role: user.role,
  //           email: user.email,
  //         },
  //         {
  //           expiresIn: 3600,
  //           subject: 'festival-api',
  //         },
  //       );
  //       return cr;
  //     }
  //   }
  //   throw new UnauthorizedException();
  // }
}
