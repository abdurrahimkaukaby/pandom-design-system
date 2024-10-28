import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './shared/shared.module';
import { SidebarService } from './shared/components/features/layout/sidebar/sidebar.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpBaseApiHeader } from './providers/interceptor/http-api.interceptor';
import { AuthInterceptor } from './providers/interceptor/http-authorization.interceptor';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HIGHLIGHT_OPTIONS, HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPhosphorIconsModule,
    MatIconModule,
    SharedModule,
    HttpClientModule,
    NgApexchartsModule,
    HighlightModule,
  ],
  providers: [
      provideHighlightOptions({
        fullLibraryLoader: () => import('highlight.js'),
        themePath: 'assets/styles/solarized-dark.css'
      })
    ,
    provideAnimationsAsync(),
    SidebarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpBaseApiHeader,
      multi: true,
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
