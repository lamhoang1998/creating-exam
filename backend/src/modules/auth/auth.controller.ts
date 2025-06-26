import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-auth.dto';
import { LoginDto } from './dto/login-auth.dto';
import { ResponseMessage } from 'src/common/decorator/response-message.decorator';
import { Public } from 'src/common/decorator/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  @ResponseMessage(`successfully signed up`)
  async register(@Body() registerBody: RegisterDto) {
    return this.authService.register(registerBody);
  }

  @Public()
  @Post('login')
  @ResponseMessage(`successfully signed in`)
  async login(@Body() loginBody: LoginDto) {
    return this.authService.login(loginBody);
  }

  @Public()
  @Post(`refresh-token`)
  async refreshToken(@Req() req: Request) {
    return this.authService.refreshToken(req);
  }
}
