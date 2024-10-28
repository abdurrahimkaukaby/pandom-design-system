import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'transformSelectionValue'
  })
  export class TransformSelectionValuePipe implements PipeTransform {
  
    transform(value: any, selections : {title: string, value: any}[]): string {
      return selections?.find(v => v?.value === value)?.title || ''
  
    }
  
  }