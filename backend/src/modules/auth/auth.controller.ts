import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-auth.dto';
import { LoginDto } from './dto/login-auth.dto';
import { ResponseMessage } from 'src/common/decorator/response-message.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerBody: RegisterDto) {
    return this.authService.register(registerBody);
  }

  @Post('login')
  @ResponseMessage(`successfully signed in`)
  async login(@Body() loginBody: LoginDto) {
    return this.authService.login(loginBody);
  }
}
