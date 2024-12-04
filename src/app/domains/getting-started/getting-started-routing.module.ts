import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GettingStartedComponent } from "./getting-started.component";

const routes: Routes = [
    { 
      path: '', 
      component: GettingStartedComponent,
      data: {
        breadcrumb: {
          label: 'Getting started',
          parents: []
        }
      }
    },
    {
      path: 'getting-started',
      children: [
      ],
      data: {
        breadcrumb: {
          label: 'Getting Started',
          parents: []
        }
      }
      // canActivate: [AuthGuard],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class GettingStartedRoutingModule {}