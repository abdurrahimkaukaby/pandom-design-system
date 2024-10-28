import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'transformSummaryRunningHour'
  })
  export class TransformSummaryRunningHourPipe implements PipeTransform {
  
    transform(data : {name: string, model: string, serialNumber: string, average : {value:number, pmi?: number}[], planning: {value:number, pmi?: number}[]}[], monthIndex : number): {name: string, model: string, serialNumber: string, average : {value:number, pmi?: number}[], planning: {value:number, pmi?: number}[]}[] {
        return data.filter(value => value.planning?.at(monthIndex)?.pmi !== null && value.planning?.at(monthIndex)?.pmi !== undefined)    
    }
  
  }