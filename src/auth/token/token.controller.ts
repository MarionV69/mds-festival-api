import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth/token')
export class TokenController {
  constructor(
    private users: UsersService,
    private jwts: JwtService,
  ) {}

  @Get()
  async signIn(@Headers('Authorization') auth?: string) {
    const args = auth && auth.split(' ');
    if (args && args.length == 2 && args[0].toLowerCase() == 'basic') {
      const credentials = Buffer.from(args[1], 'base64')
        .toString('utf8')
        .split(':');

      const email = credentials[0];
      const password = credentials[1];
      const user = await this.users.findByEmail(email);
      if (user && (await bcrypt.compare(password, user.hash))) {
        const cr = new SignInDto();
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
    }
    throw new UnauthorizedException();
  }
}
