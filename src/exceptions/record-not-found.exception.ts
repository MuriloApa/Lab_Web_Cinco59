import { HttpException, HttpStatus } from '@nestjs/common';

export class RecordnotfoundException extends HttpException {
  constructor() {
    super('Record not found', HttpStatus.NOT_FOUND);
  }
}
