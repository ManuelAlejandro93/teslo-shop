import { Injectable } from '@nestjs/common';
import { PracticeHelpers } from './helpers/PracticeHelpers';

@Injectable()
export class PracticeService {
  public findAll() {
    return PracticeHelpers.getSeed();
  }
  //!Method for dependency Inyection
  public startPracticeSeed() {
    PracticeHelpers.startPracticeSeed();
    return {
      message:
        'Practice Seed Executed. Go back to Practice `http://localhost:3000/practice` and watch the new info.',
    };
  }
}
