import { Controller, Get } from '@nestjs/common';
import { PracticeService } from './practice.service';

@Controller('practice')
export class PracticeController {
  constructor(private readonly practiceService: PracticeService) {}

  @Get()
  findAll() {
    return this.practiceService.findAll();
  }
}
