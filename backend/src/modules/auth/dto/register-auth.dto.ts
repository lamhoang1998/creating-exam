import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Full name is required and cannot be empty.' })
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Email is required and cannot be empty.' })
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Phone number is required and cannot be empty.' })
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Password is required and cannot be empty.' })
  @IsString()
  password: string;

  @ApiProperty({
    description:
      'its optional, when you want to create an account being an admin, just give 1, just omit it when you want to create a normal user account',
  })
  @IsOptional()
  @IsNumber()
  roleId: number;
}
