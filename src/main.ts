import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 유효성 검사를 통과하지 못한 속성은 제거
      forbidNonWhitelisted: true, // 유효성 검사를 통과하지 못한 속성이 있으면 요청 자체를 막음
      transform: true, // 클라이언트의 요청을 클래스로 변환
    }),
  );
  await app.listen(3000);
}
bootstrap();
