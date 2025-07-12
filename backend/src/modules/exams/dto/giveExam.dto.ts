import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GiveExam {
  @IsNumber()
  @IsNotEmpty({ message: 'userId is required and cannot be empty' })
  userId: number;

  @IsString()
  @IsNotEmpty({ message: 'examName is required and cannot be empty' })
  exam: string;
}
