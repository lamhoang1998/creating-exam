import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsString({ message: 'Email must be a string.' })
  @IsNotEmpty({ message: 'Email is required and cannot be empty.' })
  email: string;

  @ApiProperty()
  @IsString({ message: 'Password must be a string.' })
  @IsNotEmpty({ message: 'Password is required and cannot be empty.' })
  password: string;
}
