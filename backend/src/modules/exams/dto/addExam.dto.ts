import { Type } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class answer {
  @IsNotEmpty({ message: 'text is required and cannot be empty' })
  @IsString()
  text: string;
}

export class question {
  @IsNotEmpty({ message: 'content is required and cannot be empty ' })
  @IsString()
  content: string;

  @IsNotEmpty({ message: 'correct answer is required and cannot be empty' })
  @IsString()
  correctAnswer: string;

  @IsNotEmpty({ message: 'score is required and cannot be empty' })
  @IsNumber()
  score: number;

  @IsIn(['multiple', 'problem'], {
    message: 'Type must be either "multiple" or "problem"',
  })
  @IsNotEmpty({ message: 'type is required and cannot be empty' })
  type: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => answer)
  answers: answer[];
}

export class addExamDto {
  @IsNotEmpty({ message: 'exam name is required and cannot be empty.' })
  @IsString()
  examName: string;

  @IsNotEmpty({ message: 'subject is required and cannot be empty' })
  @IsString()
  subject: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => question)
  questions: question[];
}
