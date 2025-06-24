import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/init.prisma';

@Injectable()
export class UsersService {
  constructor(public prisma: PrismaService) {}

  async getUserInfo(req: Request) {
    console.log('ok');
  }
}
