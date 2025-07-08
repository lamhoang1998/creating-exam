import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { PrismaService } from 'src/common/prisma/init.prisma';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UploadController],
  providers: [
    UploadService,
    PrismaService,
    JwtService,
    JwtStrategy,
    ConfigService,
  ],
})
export class UploadModule {}
