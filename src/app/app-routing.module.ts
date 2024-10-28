import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'PANDOM | Home',
    data: {
      breadcrumb: {
        label: 'Home',
        parents: []
      }
    },
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./domains/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'component',
    title: 'PANDOM | component',
    data: {
      breadcrumb: {
        label: 'Component',
      }
    },
    loadChildren: () =>
      import('./domains/component/component.module').then((m) => m.ComponentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
