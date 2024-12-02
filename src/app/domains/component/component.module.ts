import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ComponentComponent } from './component.component';
import { AvatarPageComponent } from './components/avatar-page/avatar-page.component';
import { BadgePageComponent } from './components/badge-page/badge-page.component';
import { ComponentRoutingModule } from './component-routing.module';
import { HIGHLIGHT_OPTIONS, HighlightAuto, HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { ButtonPageComponent } from './components/button-page/button-page.component';
import { BreadcrumbPageComponent } from './components/breadcrumb-page/breadcrumb-page.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { DatePickerPageComponent } from './components/date-picker-page/date-picker-page.component';
import { StepperPageComponent } from './components/stepper-page/stepper-page.component';
import { TabPageComponent } from './components/tab-page/tab-page.component';
import { DropdownPageComponent } from './components/dropdown-page/dropdown-page.component';
import { InputPageComponent } from './components/input-page/input-page.component';

@NgModule({
  declarations: [
    ComponentComponent,
    AvatarPageComponent,
    BadgePageComponent,
    ButtonPageComponent,
    BreadcrumbPageComponent,
    CardPageComponent,
    DatePickerPageComponent,
    StepperPageComponent,
    TabPageComponent,
    DropdownPageComponent,
    InputPageComponent,
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    NgApexchartsModule,
    // HighlightAuto,
    // HighlightLineNumbers
  ],
  providers: [
    // provideHighlightOptions({
    //   coreLibraryLoader: () => import('highlight.js/lib/core'),
    //   lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // Optional, add line numbers if needed
    //   languages: {
    //     typescript: () => import('highlight.js/lib/languages/typescript'),
    //     css: () => import('highlight.js/lib/languages/css'),
    //     xml: () => import('highlight.js/lib/languages/xml'),
    //   },
    //   // themePath: 'path-to-theme.css' // Optional, useful for dynamic theme changes
    // })
  ],
})
export class ComponentModule { }
