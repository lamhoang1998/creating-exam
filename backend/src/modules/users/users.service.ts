import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/common/prisma/init.prisma';

@Injectable()
export class UsersService {
  constructor(public prisma: PrismaService) {}

  async getUserInfo(req: Request) {
    console.log({ req: req.user });
  }
}
