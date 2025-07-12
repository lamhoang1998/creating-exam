import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/init.prisma';
import { addExamDto, question } from './dto/addExam.dto';
import { courses, questionTypes } from 'src/types/exams.type';
import { Request } from 'express';
import { GiveExam } from './dto/giveExam.dto';

@Injectable()
export class ExamsService {
  constructor(public prisma: PrismaService) {}

  async addExam(addExamBody: addExamDto, req: Request): Promise<any> {
    const exam = await this.prisma.exams.create({
      data: {
        examName: addExamBody.examName,
        courseId: courses[addExamBody.subject],
        userId: req.user?.userId as number,
      },
    });

    console.log({ exam });

    for (const question of addExamBody.questions) {
      const questionData = await this.prisma.questions.create({
        data: {
          examId: exam.examId,
          questionContent: question.content,
          correctAnswer: question.correctAnswer,
          questionTypeId: questionTypes[question.type],
        },
      });

      console.log({ questionData });

      if (question.type === 'multiple') {
        const answers = question.answers;
        console.log({ answers });

        for (const answer of answers) {
          const answerData = await this.prisma.answers.create({
            data: {
              questionId: questionData.questionId,
              answerText: answer.text,
            },
          });
          console.log({ answerData });
        }
      }
    }

    return `ok`;
  }

  async giveExam(body: GiveExam) {
    const exam = await this.prisma.exams.findFirst({
      where: {
        examName: body.exam,
      },
      select: { examId: true },
    });

    const newExamTaking = await this.prisma.takingexam.create({
      data: { examId: exam?.examId as number, userId: body.userId },
    });

    return `ok`;
  }

  async getExamForStudent() {}
}
