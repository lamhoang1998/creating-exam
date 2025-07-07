import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/init.prisma';

@Injectable()
export class UploadService {
  constructor(public prisma: PrismaService) {}
  async uploadedFile(file: Express.Multer.File, req: Request) {
    if (!file) throw new BadRequestException(`Not file`);
  }
}
