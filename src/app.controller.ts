import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':appID')
  getHello(@Param('appID') id: string): string {
    console.log(id);
    return this.appService.getHello(id);
  }
}
