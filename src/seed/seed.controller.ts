import { Controller, Get } from '@nestjs/common';
import { PracticeService } from '../practice';

@Controller('seed')
export class SeedController {
  constructor(private readonly practiceService: PracticeService) {}

  @Get()
  public runSeed() {
    return this.practiceService.startPracticeSeed();
  }
}
