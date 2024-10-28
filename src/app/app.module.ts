import { NgModule } from '@angular/core';
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
  ],
  providers: [
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
  bootstrap: [AppComponent]
})
export class AppModule { }