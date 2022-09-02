import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//* Cntrollers are one of the most important building blocks of a Nest application, as they handl requests
@Controller()//*Controller is a specific request that is handled by the application.// controler are something that handle requests
export class AppController {
  constructor(private readonly appService: AppService) {}// app service is used to separate the business logic from the application logic.

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
 