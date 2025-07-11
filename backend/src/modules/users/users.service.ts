import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/init.prisma';
import { Request as ExpressRequest } from 'express-serve-static-core';

@Injectable()
export class UsersService {
  constructor(public prisma: PrismaService) {}

  async getUserInfo(req: Request & ExpressRequest) {
    const userInfo = this.prisma.users.findUnique({
      where: {
        userId: req.user?.userId,
      },
      omit: {
        password: true,
      },
    });

    console.log('userInfo', userInfo);

    return userInfo;
  }

  async getStudents() {
    const students = await this.prisma.users.findMany({
      where: { roleId: 2 },
      omit: { password: true },
    });

    return students;
  }

  async getStudentsDetail(userId: number) {}
}
