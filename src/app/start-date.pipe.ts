import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startDate'
})
export class StartDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
