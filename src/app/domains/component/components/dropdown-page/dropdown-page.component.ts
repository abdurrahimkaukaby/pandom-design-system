import { Component, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccordionAnimation } from '../../../../core/const/animation.const';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-dropdown-page',
  templateUrl: './dropdown-page.component.html',
  styleUrl: './dropdown-page.component.css',
  animations: [
    AccordionAnimation
  ],
})
export class DropdownPageComponent {
  isScrolled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  selectedTab : string = 'usage'
  selectedTabChildren : string = 'First tab'

  yourCode: string = `
    <app-stepper 
        [activeStepIndex]="activeStepIndex"
        [stepperData]="stepperData"
        (onEmitStep)="onClickStepIndex($event)"
        class="w-full">
        <div class="flex gap-2">
            <app-button
                [disableTerm]="activeStepIndex === 0"
                (click)="activeStepIndex === 0? null : onChangeStep(activeStepIndex - 1)"
                color="secondary">
                Back
            </app-button>
            <app-button
                [disableTerm]="activeStepIndex === 2"
                iconRight="ph-fill:caret-right"
                (click)="activeStepIndex === 2? null : onChangeStep(activeStepIndex + 1)"
            >
                {{activeStepIndex === 2? 'Finish' : 'Next'}}
            </app-button>
        </div>
    </app-stepper>
  `;

  codeHtmlTab: string = `
    <div class="flex justify-between px-6 py-4 w-full">
        <div class="flex">
            <div *ngFor="let step of stepperData; index as stepperIndex" class="flex">
                <div 
                    [ngClass]="{'pointer-events-none':activeStepIndex === stepperIndex}"
                    class="flex items-center gap-2">
                    <button 
                        (click)="!step.isDisable? onClickStep(stepperIndex) : null"
                        [ngClass]="{
                            'bg-[#F4F4F5] ': activeStepIndex === stepperIndex && !step?.isCompleted,
                            'bg-[#006CB7] border-etma-blue-400 text-white': step?.isCompleted,
                            'cursor-pointer': !step.isDisable,
                            'cursor-default pointer-events-none': step.isDisable,
                        }"
                        class="flex items-center justify-center h-6 w-6 rounded-md border pt-[1px] text-sm focus:border-[#006CB7] focus:shadow-sm focus:shadow-[#B9E1FE]">
                        <mat-icon *ngIf="step?.isCompleted" class="p-1 mb-[2px]" svgIcon="ph-bold:check"></mat-icon>
                        
                        {{!step?.isCompleted ? stepperIndex + 1 : ''}}
                    </button>
                    <span 
                        (click)="!step.isDisable? onClickStep(stepperIndex) : null"
                        [ngClass]="{
                            'font-medium': activeStepIndex === stepperIndex,
                            'cursor-pointer': !step.isDisable,
                            }"
                        class="flex items-center rounded-md text-sm">
                        {{step.title}}
                    </span>
                </div>
                <div *ngIf="stepperIndex + 1 !== stepperData?.length" class="flex justify-center flex-col divide-y-2 w-8 p-2">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

        <ng-content></ng-content>
    </div>
  `;

  codeTsTab: string = `
    export interface stepperDataDTO {
      title:string;
      isCompleted : boolean;
      isDisable : boolean;
    }

    @Component({
      selector: 'app-stepper',
      standalone: true,
      templateUrl: './stepper.component.html',
      styleUrl: './stepper.component.css'
    })
    export class StepperComponent implements OnChanges {
      @Input() stepperData: stepperDataDTO[] = [
        {
          title: 'First step',
          isCompleted: false,
          isDisable: false
        },
        {
          title: 'Second step',
          isCompleted: true,
          isDisable: false
        },
        {
          title: 'Third step',
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
  `;
  
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (verticalOffset > 240) {
      this.isScrolled$.next(false);
    } else {
      this.isScrolled$.next(true);
    }
  }
  
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  onSelectedTab(tab:string){
    this.selectedTab = tab
  } 

  onSelectedTabChildren(tab:string){
    this.selectedTabChildren = tab
  }

}
