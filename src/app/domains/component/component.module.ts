import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ComponentComponent } from './component.component';
import { AvatarPageComponent } from './components/avatar/avatar-page.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ComponentRoutingModule } from './component-routing.module';
import { HIGHLIGHT_OPTIONS, HighlightAuto, HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@NgModule({
  declarations: [
    ComponentComponent,
    AvatarPageComponent,
    BadgeComponent
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
