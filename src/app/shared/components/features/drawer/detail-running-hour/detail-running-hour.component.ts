import { Component, EventEmitter, Input, OnChanges, OnInit, Output, signal, SimpleChanges } from '@angular/core';
import { take } from 'rxjs';
import { ConfirmationService } from '../../confirmation-modal/confirmation-modal.service';
import { ToasterService } from '../../toaster/toaster.service';
import { SlideAnimation, AccordionAnimation, FadeInOutAnimation } from '../../../../../core/const/animation.const';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormGroupOf } from '../../../../../core/dto/form-group-of.dto';

interface formEditDTO {
  opr : number
  sbt : number
  sdt : number
  usdt : number
}

@Component({
  selector: 'app-detail-running-hour',
  templateUrl: './detail-running-hour.component.html',
  styleUrl: './detail-running-hour.component.css',
  animations: [
    SlideAnimation,
    AccordionAnimation,
    FadeInOutAnimation
  ],
})
export class DetailRunningHourComponent implements OnChanges, OnInit {
  @Input() selectedRunningHour : any = {
    equipmentName: 'POTABLE WATER PUMP B',
    workcenterName: 'SKG BERINGIN',
    parentName: 'mechanical',
    categoryName: 'pump',
    manufactureName: 'ABB',
    manufactureModel: 'M3KP 112 MB',
    serialNumber: '3G1f1626344242',
    manufactureYear: 2020,
    mtbf: 326,
    mttr: 0,
    detailData: [
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 0,
        sbt: 24,
        sdt: 0,
        usdt: 0,
        updatedAt: '2024-08-18T01:27:16.516'
      },
      {
        date: '2024-01-04',
        opr: 1,
        sbt: 21,
        sdt: 1,
        usdt: 1,
        updatedAt: '2024-08-18T01:27:16.516'
      },
    ],
  }
  @Output() onCancelEmit = new EventEmitter<void>();
  @Output() onRefreshEmit = new EventEmitter<void>();
  
  isExpandGeneral : boolean = false;

  formArray = new FormArray<FormGroup<FormGroupOf<formEditDTO>>>([])
  selectedEditIndex = signal<number>(null)
  selectedColumn : string = ''

  constructor(
    private confirmationService: ConfirmationService,
    private toasterService: ToasterService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {

    if (
      changes['selectedRunningHour'] &&
      changes['selectedRunningHour']?.previousValue !== changes['selectedRunningHour']?.currentValue!
    ) {
      
      this.selectedRunningHour?.detailData.forEach(v => {
        this.formArray.push(
          new FormGroup<FormGroupOf<formEditDTO>>({
            opr : new FormControl<number>(v.opr),
            sbt : new FormControl<number>(v.sbt),
            sdt : new FormControl<number>(v.sdt),
            usdt : new FormControl<number>(v.usdt)
          })
        )
      })
    }
  }

  ngOnInit(): void {
    this.selectedRunningHour?.detailData.forEach(v => {
      this.formArray.push(
        new FormGroup<FormGroupOf<formEditDTO>>({
          opr : new FormControl<number>(v.opr),
          sbt : new FormControl<number>(v.sbt),
          sdt : new FormControl<number>(v.sdt),
          usdt : new FormControl<number>(v.usdt)
        })
      )
    })
  }


  onSelectEditIndex(column: string, index:number){
    if(this.selectedEditIndex() !== null){
      this.formArray.at(this.selectedEditIndex()).controls[this.selectedColumn].patchValue(this.selectedRunningHour.detailData[this.selectedEditIndex()][this.selectedColumn])
    }
    this.selectedColumn = column
    this.selectedEditIndex.set(index)
    console.log('index data => ', this.selectedEditIndex());
    console.log(column+index);
    
    setTimeout(() => {
      const input = document.getElementById(column+index) as HTMLInputElement;
      if (input) {
        input.focus();
      }
    }, 0);
  }

  onDeselectEditIndex(){
    this.selectedEditIndex.set(null)
  }

  onSubmit(column: string, index:number){
    console.log('submittt => ', column, this.formArray.at(index).controls[column].value);
    
  }

  onCancel(){
    
    this.confirmationService.onCloseModal()
    this.onCancelEmit.emit()
     
  }

  onToggleGeneral(event: MouseEvent){
    event.stopPropagation();
    this.isExpandGeneral = !this.isExpandGeneral;
  }

  onConfirmationModal(){
    this.confirmationService.openConfirmationDialog({
      title: 'Cancel add user',
      message: 'Are you sure? your progress will not be saved.',
      confirmButtonText: 'Yes, Cancel',
      cancelButtonText: 'Stay here',
      confirmButtonColor: 'red',
      backgroundColor: 'transparent',
      positionX: 'right'
    });
    // this.confirmationService.onStartLoading();

    this.confirmationService.confirmAction$
    .pipe(
      take(1)
    )
    .subscribe(confirmed => {
      if (confirmed) {
        // Proceed with the delete action
        console.log('Cancel confirmaed');
        this.confirmationService.onCloseModal()
        this.onCancelEmit.emit()
      } else {
        console.log('Cancel cancelled');
      }
    });
  }

  doNothing(event: MouseEvent){
    event.stopPropagation();
  }

}
