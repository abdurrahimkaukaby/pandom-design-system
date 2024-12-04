import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { SharedModule } from "../../shared/shared.module";
import { GettingStartedRoutingModule } from "./getting-started-routing.module";
import { GettingStartedComponent } from "./getting-started.component";

@NgModule({
    declarations: [
      GettingStartedComponent
    ],
    imports: [
      CommonModule,
      GettingStartedRoutingModule,
      SharedModule,
      ReactiveFormsModule,
      FormsModule,
      MatIconModule,
    ],
    providers: [
    ],
  })
  export class GettingStartedModule { }