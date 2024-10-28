import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LocalServiceConst } from '../../core/const/local-storage.const';

@Injectable()
export class HttpBaseApiHeader implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isApiRequest = request.url.startsWith(environment.host.etma.url);

    const token = localStorage.getItem(LocalServiceConst.AUTHENTICATION_TOKEN);
    
    if (isApiRequest) {
      request = request.clone({
        setHeaders: {
          Authorization: token? 'Bearerr ' + token : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyRGF0YSI6eyJmaXJzdE5hbWUiOiJBZG1pbmlzdHJhdG9yIiwibGFzdE5hbWUiOiJFVE1BIiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInVzZXJuYW1lIjoiYWRtaW4ifSwicGVybWlzc2lvbnMiOlsibXRkX3VzZXIjcmVhZCIsIm10ZF91c2VyI2NyZWF0ZSJdLCJyb2xlcyI6WyJNYWludGFpbmVyIl0sInN1YiI6ImFkbWluIiwiaWF0IjoxNzI2OTk5NDE5LCJleHAiOjE3MjcwNDI2MTl9.DE1GCVwagS1qL-SLhXvy9_ZGYzytjd9bxOHQw5YHvGs',
        },
      });
    }

    return next.handle(request);
  }
}
