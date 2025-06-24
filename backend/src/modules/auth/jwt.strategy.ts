import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/common/prisma/init.prisma';
import { User, UserPayload } from 'src/common/types/users.types';
import 'passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'protect') {
  constructor(
    public configService: ConfigService,
    public prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('ACCESS_TOKEN_SECRET') as string,
    });
  }

  async validate(payload: UserPayload) {
    const user = await this.prisma.users.findUnique({
      where: {
        userId: payload.userId,
      },
      omit: {
        password: true,
      },
    });
    return user as User;
  }
}
