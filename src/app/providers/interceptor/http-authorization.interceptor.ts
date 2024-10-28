import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";
import { AuthService } from "../../core/services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService : AuthService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Get the current URL and query parameters
          this.authService.logout();

          const currentUrl = this.router.url;

          // Redirect to login page and pass the current URL as a query parameter
          this.router.navigate(['/home'], { queryParams: { returnUrl: currentUrl } });
        }
        return throwError(() => error);
      })
    );
  }
}