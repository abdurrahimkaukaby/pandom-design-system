import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ComponentComponent } from './component.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ComponentRoutingModule } from './component-routing.module';

@NgModule({
  declarations: [
    ComponentComponent,
    AvatarComponent,
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
  ],
  providers: [
  ],
})
export class ComponentModule { }
