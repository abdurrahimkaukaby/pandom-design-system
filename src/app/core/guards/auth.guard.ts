import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard {
  
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const isAuthenticated = this.authService.isAuthenticated();
  
      if (isAuthenticated) {
        console.log('suthenticated');
        
        return true;  // Allow access
      } else {
        console.log('not suthenticated');
        // If not authenticated, redirect to login page with returnUrl
        if (state.url !== '/login') {
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        }

        return false;  // Block access
      }
    }
  }