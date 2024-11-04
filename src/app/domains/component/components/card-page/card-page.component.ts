import { AfterViewInit, Component, HostListener } from '@angular/core';
import { AccordionAnimation, FadeInOutAnimation, SlideAnimation } from '../../../../core/const/animation.const';
import { BehaviorSubject } from 'rxjs';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css',
  animations: [
    SlideAnimation,
    AccordionAnimation,
    FadeInOutAnimation
  ],
})
export class CardPageComponent implements AfterViewInit {
  isScrolled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  selectedTab : string = 'usage'

  yourCode: string = `
    // default card
    <app-card 
        title="Card title" 
        message="Card messages or subtitles to give users instructions or to request confirmation." 
        primaryButtonText="Primary button" 
        secondaryButtonText="Secondary button">
    </app-card>

    // Example of a delete confirmation card
    <app-card 
        title="Delete item?" 
        message="Please be carefull, this action cannot be undone." 
        primaryButtonText="Delete item" 
        secondaryButtonText="Cancel" 
        primaryButtonColor="red">
    </app-card>
  `;

  yourCodeImage: string = `
    // Example of a card confirmation with image
    <app-card-basic 
        primaryButtonText="Primary Button"
        secondaryButtonText="Secondary Button"
        imageUrl="your image url here" 
        title="Title of content" 
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." >
    </app-card-basic>

    // Example of a card informarion with image
    <app-card-basic 
        [isCancelButton]="false"
        imageUrl="your image url here" 
        title="Title of content" 
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." >
    </app-card-basic>
  `;

  yourCodeContent: string = `
    // Example of a card confirmation with content
    <app-card-basic 
        primaryButtonText="Primary Button"
        secondaryButtonText="Secondary Button"
        title="Title of content" message="subtitle" >
        <div class="flex flex-col gap-4 w-full items-center justify-center mt-4">
            <img class="flex w-auto max-h-[260px]" src="your image urle here" alt="alt">
            <span class="text-text-text-secondary text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
    </app-card-basic>

    // Example of a card informarion with content
    <app-card-basic 
        [isCancelButton]="false"
        title="Title of content" message="subtitle" >
        <div class="flex flex-col gap-4 w-full items-center justify-center mt-4">
            <img class="flex w-auto max-h-[260px]" src="your image urle here" alt="alt">
            <span class="text-text-text-secondary text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
    </app-card-basic>
  `;

  codeHtmlCard: string = `
    <div 
        class="relative bg-background-background-base-default rounded-lg shadow w-[420px] border border-border-border-base">
        <div class="flex w-full items-center justify-center">
            <img *ngIf="imageUrl && imageUrl !== ''" class="flex w-auto max-h-[260px]" [src]="imageUrl" alt="alt">
        </div>
        <div class="relative flex items-start p-6 justify-between">
            <div class="flex flex-col gap-1">
                <span class="font-medium text-base">{{title}}</span>
                <span class="text-text-text-secondary text-sm">{{message}}</span>
                <ng-content></ng-content>
            </div>
            <div 
                *ngIf="isCancelButton"
                (click)="onCancel()"
                class="flex absolute right-4 top-3 h-4 w-4 hover:text-etma-danger-500 cursor-pointer">
                <mat-icon class="" svgIcon="ph-regular:x"></mat-icon>
            </div>
        </div>
        <div 
            *ngIf="(secondaryButtonText && secondaryButtonText !== '') || (primaryButtonText && primaryButtonText !== '')"
            class="flex justify-end gap-2 px-6 py-4 bg-background-background-subtle border-t border-border-border-base w-full items-end rounded-b-lg">
            <button 
                *ngIf="secondaryButtonText && secondaryButtonText !== ''"
                (click)="onSecondaryConfirm($event)"
                type="button" 
                class="text-text-text-primary bg-background-background-base-default hover:bg-background-background-base-hover border-border-border-base border px-3 py-2 rounded-md"
            >
                {{secondaryButtonText}}
            </button>
            <button
                *ngIf="primaryButtonText && primaryButtonText !== ''"
                (click)="onConfirm($event)"
                [ngClass]="{
                    'bg-background-background-brand-default hover:bg-background-background-brand-hover' : primaryButtonColor === 'blue',
                    'bg-background-background-danger-inverse hover:bg-background-background-danger-inverse-hover' : primaryButtonColor === 'red',
                    'opacity-50' : isLoading
                }"
                type="button" 
                class="flex text-text-text-inverse border-border-border-base border px-3 py-2 rounded-md"
            >
                <div *ngIf="isLoading" class="flex pr-2 pt-1">
                    <app-loading-ring></app-loading-ring>
                </div>
                {{primaryButtonText}}
            </button>
        </div>
    </div>
  `;

  codeTsCard: string = `
    @Component({
      standalone: true,
      selector: 'app-card',
      templateUrl: './card.component.html',
      styleUrl: './card.component.css',
      animations: [
        SlideAnimation,
        AccordionAnimation,
        FadeInOutAnimation
      ],
    })
    export class CardBasicComponent {
      @Input() title: string = 'Are you sure?';
      @Input() message: string = 'Do you want to proceed with this action?';
      @Input() primaryButtonColor: 'blue' | 'red' = 'blue';
      @Input() primaryButtonText: string = '';
      @Input() secondaryButtonText: string = '';
      @Input() isLoading: boolean = false;
      @Input() isCancelButton: boolean = true;
      @Input() imageUrl: string = ''

      @Output() confirmed = new EventEmitter<void>();
      @Output() secondaryConfirmed = new EventEmitter<void>();
      @Output() canceled = new EventEmitter<void>();

      onConfirm(event: MouseEvent){
        event.stopPropagation();
        this.confirmed.emit();
      }

      onSecondaryConfirm(event: MouseEvent){
        event.stopPropagation();
        this.secondaryConfirmed.emit();
      }

      onCancel() {
        this.canceled.emit();
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
}
