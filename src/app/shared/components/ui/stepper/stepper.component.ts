import { Component, EventEmitter, input, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

export interface stepperDataDTO {
  title:string;
  isCompleted : boolean;
  isDisable : boolean;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent implements OnChanges {
  @Input() stepperData: stepperDataDTO[] = [
    {
      title: 'General specification',
      isCompleted: false,
      isDisable: false
    },
    {
      title: 'Technical specification',
      isCompleted: true,
      isDisable: false
    },
    {
      title: 'QR-code',
      isCompleted: false,
      isDisable: false
    },
  ]

  @Output() onEmitStep: EventEmitter<number> = new EventEmitter<number>();


  @Input() activeStepIndex : number = 0


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeStepIndex'] && changes['activeStepIndex']?.previousValue !== changes['activeStepIndex']?.currentValue!) {}
    if (changes['stepperData'] && changes['stepperData']?.previousValue !== changes['stepperData']?.currentValue!) {}
  }

  onClickStep(index: number){
    this.onEmitStep.emit(index);
  }

}
