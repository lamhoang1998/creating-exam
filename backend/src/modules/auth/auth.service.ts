import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/init.prisma';
import { RegisterDto } from './dto/register-auth.dto';
import { UserExists } from 'src/common/types/users.types';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { saltRounds } from 'src/utils/auth.utils';
import { LoginDto } from './dto/login-auth.dto';
import { access } from 'fs';
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
        ...(registerBody.roleId && { roleId: registerBody.roleId }),
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
        email: true,
        userId: true,
        password: true,
        roleId: true,
      },
    });

    console.log({ userExists });

    if (!userExists)
      throw new BadRequestException(
        'Email does not exist, please register first',
      );

    const passHash = userExists.password as string;
    const isPassword = bcrypt.compareSync(password, passHash);
    console.log({ isPassword });
    if (!isPassword) throw new BadRequestException(`Mật khẩu không chính xác`);

    const tokens = this.createTokens(userExists);

    const user = {
      userId: userExists.userId,
      email: userExists.email,
      roleId: userExists.roleId,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };

    return user;
  }

  async refreshToken(req: Request) {
    const refreshToken = req.headers[`authorization`]?.split(' ')[1] as string;

    const accessToken = req.headers[`x-access-token`] as string;

    if (!refreshToken) throw new UnauthorizedException();
    if (!accessToken) throw new UnauthorizedException();

    const decodedAccessToken = this.jwtService.verify(accessToken, {
      secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
      ignoreExpiration: true,
    });

    const decodedRefreshToken = this.jwtService.verify(refreshToken, {
      secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
    });

    if (decodedRefreshToken.userId !== decodedAccessToken.userId)
      throw new UnauthorizedException();

    const user = await this.prisma.users.findUnique({
      where: {
        userId: decodedRefreshToken.userId,
      },
      select: { userId: true, password: true },
    });

    const tokens = this.createTokens(user);

    return tokens;
  }

  createTokens(userExists: UserExists) {
    const accessToken = this.jwtService.sign(
      { userId: userExists?.userId },
      {
        secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
        expiresIn: this.configService.get<string>('ACCESS_TOKEN_EXPIRED'),
      },
    );
    const refreshToken = this.jwtService.sign(
      { userId: userExists?.userId },
      {
        secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
        expiresIn: this.configService.get<string>('REFRESH_TOKEN_EXPIRED'),
      },
    );
    return { accessToken, refreshToken };
  }
}
