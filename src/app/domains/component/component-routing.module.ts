import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component.component';
import { AvatarPageComponent } from './components/avatar-page/avatar-page.component';
import { BadgePageComponent } from './components/badge-page/badge-page.component';
import { ButtonPageComponent } from './components/button-page/button-page.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { DatePickerPageComponent } from './components/date-picker-page/date-picker-page.component';
import { BreadcrumbPageComponent } from './components/breadcrumb-page/breadcrumb-page.component';
import { StepperPageComponent } from './components/stepper-page/stepper-page.component';
import { TabPageComponent } from './components/tab-page/tab-page.component';
import { DropdownPageComponent } from './components/dropdown-page/dropdown-page.component';
import { InputPageComponent } from './components/input-page/input-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    // { 
    //     path: '', 
    //     component: ComponentComponent,
    //     data: {
    //         breadcrumb: {
    //         label: 'Home',
    //         parents: []
    //         }
    //     }
    // },
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
    },
    {
        path: '',
        children: [
            { path: 'badge', component: BadgePageComponent },
        ],
        data: {
            breadcrumb: {
            label: 'Badge Component',
            parents: [
                {route: '/badge', label: 'Badge'}
            ]
            }
        }
    },
    {
        path: '',
        children: [
            { path: 'breadcrumb', component: BreadcrumbPageComponent },
        ],
        data: {
            breadcrumb: {
            label: 'Breadcrumb Component',
            parents: [
                {route: '/breadcrumb', label: 'Breadcrumb'}
            ]
            }
        }
    },
    {
        path: '',
        children: [
            { path: 'button', component: ButtonPageComponent },
        ],
        data: {
            breadcrumb: {
            label: 'Button Component',
            parents: [
                {route: '/button', label: 'Button'}
            ]
            }
        }
    },
    {
        path: '',
        children: [
            { path: 'card', component: CardPageComponent },
        ],
        data: {
            breadcrumb: {
            label: 'Card Component',
            parents: [
                {route: '/card', label: 'Card'}
            ]
            }
        }
    },
    {
        path: '',
        children: [
            { path: 'date-picker', component: DatePickerPageComponent },
        ],
        data: {
            breadcrumb: {
            label: 'Date Picker Component',
            parents: [
                {route: '/date-picker', label: 'Date Picker'}
            ]
            }
        }
    },
    {
        path: '',
        children: [
            { path: 'dropdown', component: DropdownPageComponent },
        ],
        data: {
            breadcrumb: {
            label: 'Dropdown Component',
            parents: [
                {route: '/dropdown', label: 'Dropdown'}
            ]
            }
        }
    },
    {
        path: '',
        children: [
            { path: 'stepper', component: StepperPageComponent },
        ],
        data: {
            breadcrumb: {
            label: 'Stepper Component',
            parents: [
                {route: '/stepper', label: 'Stepper'}
            ]
            }
        }
    },
    {
        path: '',
        children: [
            { path: 'input', component: InputPageComponent },
        ],
        data: {
            breadcrumb: {
            label: 'Input Component',
            parents: [
                {route: '/input', label: 'Input'}
            ]
            }
        }
    },
    {
        path: '',
        children: [
            { path: 'tab', component: TabPageComponent },
        ],
        data: {
            breadcrumb: {
            label: 'Tab Component',
            parents: [
                {route: '/tab', label: 'Tab'}
            ]
            }
        }
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
