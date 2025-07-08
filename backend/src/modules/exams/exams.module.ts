import { Module } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';
import { PrismaService } from 'src/common/prisma/init.prisma';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  controllers: [ExamsController],
  providers: [
    ExamsService,
    PrismaService,
    ConfigService,
    JwtService,
    JwtStrategy,
  ],
})
export class ExamsModule {}
