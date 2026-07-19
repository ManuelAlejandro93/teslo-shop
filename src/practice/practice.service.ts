import { Injectable } from '@nestjs/common';
import { PracticeHelpers } from './helpers/PracticeHelpers';

@Injectable()
export class PracticeService {
  findAll() {
    return PracticeHelpers.getSeed();
  }
  //!Method for dependency Inyection
  startPracticeSeed() {
    PracticeHelpers.startPracticeSeed();
    return {
      message:
        'Practice Seed Executed. Go back to Practice API route and watch the new info.',
    };
  }
}
