import { Controller, Get, Query, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request as ExpressRequest } from 'express-serve-static-core';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(`get-user-info`)
  async getUserInfo(@Req() req: Request & ExpressRequest) {
    return this.usersService.getUserInfo(req);
  }

  @Get(`get-student`)
  getStudent() {
    return this.usersService.getStudents();
  }

  @Get(`get-student-details`)
  getStudentsDetails(@Query() userId: { Id: string }) {
    console.log({ userId });
    const studentId = Number(userId.Id);
    return this.usersService.getStudentsDetail(studentId);
  }
}
