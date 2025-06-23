import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/init.prisma';
import { RegisterDto } from './dto/register-auth.dto';
import { UserExists } from 'src/common/types/users.types';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { saltRounds } from 'src/utils/auth.utils';
import { LoginDto } from './dto/login-auth.dto';
@Injectable()
export class AuthService {
  constructor(
    public prisma: PrismaService,
    public jwtService: JwtService,
    public configService: ConfigService,
  ) {}

  async register(registerBody: RegisterDto): Promise<any> {
    const isExisted = await this.prisma.users.findFirst({
      where: {
        email: registerBody.email,
      },
      omit: { password: true },
    });

    if (isExisted)
      throw new BadRequestException(
        `email already existed, please enter a new one`,
      );

    const hashPassword = bcrypt.hashSync(registerBody.password, saltRounds);

    const newUser = await this.prisma.users.create({
      data: {
        email: registerBody.email,
        fullName: registerBody.fullName,
        password: hashPassword,
        phoneNumber: registerBody.phoneNumber,
        ...(registerBody.role_id && { role_id: registerBody.role_id }),
      },
      omit: {
        password: true,
      },
    });

    return newUser;
  }

  async login(loginBody: LoginDto) {
    const { email, password } = loginBody;

    const userExists = await this.prisma.users.findFirst({
      where: {
        email: email,
      },
      select: {
        userId: true,
        password: true,
      },
    });
  }

  createTokens(userExists: UserExists) {
    const accessToken = this.jwtService.sign(
      { userId: userExists.userId },
      {
        secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
        expiresIn: this.configService.get<string>('ACCESS_TOKEN_EXPIRED'),
      },
    );
    const refreshToken = this.jwtService.sign(
      { userId: userExists.userId },
      {
        secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
        expiresIn: this.configService.get<string>('REFRESH_TOKEN_EXPIRED'),
      },
    );
    return { accessToken, refreshToken };
  }
}
