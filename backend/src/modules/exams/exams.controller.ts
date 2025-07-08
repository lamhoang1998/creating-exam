import { Body, Controller, Post } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { addExamDto } from './dto/addExam.dto';

@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Post(`add-exam`)
  addExam(@Body() addExamBody: addExamDto) {
    return this.examsService.addExam(addExamBody);
  }
}
