import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformNumberComma'
})
export class TransformNumberCommaPipe implements PipeTransform {

  transform(value: number): string {
      return new Intl.NumberFormat('en-US').format(value);    
  }

}