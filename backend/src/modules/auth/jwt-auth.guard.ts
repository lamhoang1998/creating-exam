import {
  BadRequestException,
  ExecutionContext,
  ForbiddenException,
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JsonWebTokenError, TokenExpiredError } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

import { IS_PUBLIC_KEY } from 'src/common/decorator/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('protect') {
  constructor(private reflector: Reflector) {
    super();
  }
  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    console.log({ err });
    console.log({ info });
    console.log({ user });
    if (info instanceof TokenExpiredError) throw new ForbiddenException();

    if (info instanceof JsonWebTokenError) throw new UnauthorizedException();

    if (info instanceof Error) throw new BadRequestException();

    if (err || !user) {
      console.log('unauthorization');

      throw new UnauthorizedException('User not authenticated');
    }

    return user;
  }
}
