import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: string) {
    if (!this.isStatusValid(value.toUpperCase()))
      throw new BadRequestException(`${value} is an invalid status`);
    return value;
  }

  private isStatusValid(status: any) {
    return this.allowedStatus.some((s) => s === status);
  }
}
