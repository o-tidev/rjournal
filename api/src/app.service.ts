import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World 123';
  }

  getUser(id: number): string {
    return `User ID: ${id}`;
  }
}
