import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkArrayDuplicatePipe'
})
export class CheckArrayDuplicatePipe implements PipeTransform {

  transform(array: any[]): boolean {
    return new Set(array).size !== array.length;
  }

}
