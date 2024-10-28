import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Clone the request to add the new header
    let httpRequest: HttpHeaders = req.headers.append('Access-Control-Allow-Origin','*')
    req.headers.append('x-hasura-admin-secret', 'h4sur4forB3tt3r4pi');
    httpRequest.append('Access-Control-Allow-Origin','*');
    httpRequest.append('Hasura-Client-Name', 'hasura-console');
    const clonedRequest = req.clone({ headers: httpRequest });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}