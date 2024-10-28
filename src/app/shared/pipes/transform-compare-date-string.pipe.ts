import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compareDateStringPipe'
})
export class CompareDateStringPipe implements PipeTransform {

  transform(startDate: string, endDate: string): boolean {

    const start = new Date(startDate);
    const end = new Date(endDate);

    // Compare the two dates
    return start > end;
  }

}
