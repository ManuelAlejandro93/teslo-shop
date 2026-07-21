import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PracticeService } from '../practice';

@Module({
  controllers: [SeedController],
  providers: [SeedService, PracticeService],
})
export class SeedModule {}
