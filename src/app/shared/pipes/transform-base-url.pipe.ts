import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getBaseUrlPipe'
})
export class GetBaseUrlPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(1, value.length);
  }

}
