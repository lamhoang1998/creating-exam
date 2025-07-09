import { Body, Controller, Post, Req } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { addExamDto } from './dto/addExam.dto';
import { Request } from 'express';

@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Post(`add-exam`)
  addExam(@Body() addExamBody: addExamDto, @Req() req: Request) {
    return this.examsService.addExam(addExamBody, req);
  }
}
