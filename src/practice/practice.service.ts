import { Injectable } from '@nestjs/common';

@Injectable()
export class PracticeService {
  findAll() {
    return `This action returns all practice`;
  }
}
