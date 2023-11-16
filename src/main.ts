import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,//Limpia los campos que no esperaba mi backend
      forbidNonWhitelisted:true // marca un error si hay campos que no se esperaban
    })
  )

  await app.listen(3000);
}
bootstrap();
