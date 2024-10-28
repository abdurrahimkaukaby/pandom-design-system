import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component.component';
import { AvatarPageComponent } from './components/avatar/avatar-page.component';
import { BadgeComponent } from './components/badge/badge.component';

const routes: Routes = [
  { 
    path: '', 
    component: ComponentComponent,
    data: {
        breadcrumb: {
        label: 'Specification',
        parents: []
        }
    }
},
{
    path: '',
    children: [
        { path: 'avatar', component: AvatarPageComponent },
    ],
    data: {
        breadcrumb: {
        label: 'Avatar Component',
        parents: [
            {route: '/home', label: 'Components'}
        ]
        }
    }
    // canActivate: [AuthGuard],
},
{
    path: '',
    children: [
        { path: 'badge', component: BadgeComponent },
    ],
    data: {
        breadcrumb: {
        label: 'Badge Component',
        parents: [
            {route: '/badge', label: 'Badge'}
        ]
        }
    }
    // canActivate: [AuthGuard],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
