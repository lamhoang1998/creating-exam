import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { addExamDto } from './dto/addExam.dto';
import { Request } from 'express';
import { GiveExam } from './dto/giveExam.dto';

@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Post(`add-exam`)
  addExam(@Body() addExamBody: addExamDto, @Req() req: Request) {
    return this.examsService.addExam(addExamBody, req);
  }

  @Post(`give-exam`)
  giveExam(@Body() giveExamBody: GiveExam) {
    return this.examsService.giveExam(giveExamBody);
  }

  @Get(`exam-for-students`)
  getExamForStudent() {}
}
