import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  runSeed() {
    return { message: `Seed executed.` };
  }
}
