import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  checkHealth() {
    return 'Hello Test';
  }
}
