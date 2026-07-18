import { Injectable } from '@nestjs/common';
import { SeedHelpers } from '@/seed';

@Injectable()
export class SeedService {
  runSeed() {
    SeedHelpers.startSeed();
    return { message: `Seed executed.`, seed: SeedHelpers.getSeed() };
  }
}
