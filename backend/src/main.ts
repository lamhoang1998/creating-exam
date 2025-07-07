import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';
import { User as AuthType } from './common/types/users.types';
import { ResponseSuccessInterceptor } from './common/interceptors/response-success.interceptor';
import * as express from 'express';
import { join } from 'path';

declare global {
  namespace Express {
    interface User extends AuthType {}
    interface Request {
      user?: AuthType;
    }
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const reflector = app.get(Reflector);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.useGlobalGuards(new JwtAuthGuard(reflector));
  app.useGlobalInterceptors(new ResponseSuccessInterceptor(reflector));

  app.use('/images', express.static(join(__dirname, '..', 'images')));

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
