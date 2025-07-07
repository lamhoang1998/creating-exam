import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './common/prisma/init.prisma';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from './modules/users/users.module';
import { ExamsModule } from './modules/exams/exams.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [AuthModule, UsersModule, ExamsModule, UploadModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, JwtService],
})
export class AppModule {}
