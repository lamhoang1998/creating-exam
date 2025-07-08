import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/init.prisma';
import { addExamDto } from './dto/addExam.dto';

@Injectable()
export class ExamsService {
  constructor(public prisma: PrismaService) {}

  async addExam(addExamBody: addExamDto): Promise<any> {
    console.log({ addExamBody });
  }
}
