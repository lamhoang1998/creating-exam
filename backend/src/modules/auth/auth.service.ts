import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/init.prisma';
import { RegisterDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
  constructor(public prisma: PrismaService) {}

  async register(registerBody: RegisterDto) {
    console.log('ok');
  }
}
