import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IncomingMessage } from 'http';

interface JwtPayload {
  role: string;
}

@Injectable()
export class RolesGuard {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles || !roles.length) return false;

    // Extraction du JWT
    const request = context.switchToHttp().getRequest<Request>();
    if (request instanceof IncomingMessage) {
      const auth = request.headers.authorization;
      const args = auth && auth.split(' ');
      if (args && args.length == 2 && args[0].toLowerCase() == 'bearer') {
        const token = args[1];
        const jwts = new JwtService({
          secret: process.env.JWT_SECRET || 'banane',
        });
        const payload: JwtPayload | null = jwts.decode(token);

        if (!payload) return false;
        const role = payload['role'];
        return roles.includes(role);
      }
    }
    return false;
  }
}
