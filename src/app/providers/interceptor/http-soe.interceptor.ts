import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpSoeApiHeader implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isApiRequest = request.url.startsWith(environment.host.soe.url);

    if (isApiRequest) {
      request = request.clone({
        setHeaders: {
          'x-api-key': environment.host.soe?.header?.xApiKey || '',
        },
      });
    }

    return next.handle(request);
  }
}
