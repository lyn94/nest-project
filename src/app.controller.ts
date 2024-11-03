import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hello") // 데코레이터는 함수나 클래스와 붙여서 써야한다.
  sayHello(): string {
    return 'Hello everyone'
  }

}
