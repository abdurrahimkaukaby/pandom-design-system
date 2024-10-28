import { Injectable } from "@angular/core";
import { LocalServiceConst } from "../const/local-storage.const";
import { loginDTO, tokenDTO } from "../dto/login.dto";
import { HttpService } from "../../providers/http/http.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { catchError, EMPTY, lastValueFrom, tap } from "rxjs";
import { ToasterService } from "../../shared/components/features/toaster/toaster.service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService extends HttpService {
  
    constructor(
        httpClient: HttpClient,
        private toasterService: ToasterService,
    ) {
      super(httpClient);
    }
  
    isAuthenticated(): boolean {
      const token = localStorage?.getItem(LocalServiceConst.AUTHENTICATION_TOKEN);
      console.log('token', token);
      
      return !!token;  // Return true if token exists, else false
    }
  
    login(loginForm : loginDTO) {

        return this.http.post<tokenDTO>(`${environment.host.etma.url}/${environment.host.etma.apiVersion}/authentication/login`, loginForm)
    }
  
    logout() {
      localStorage.removeItem(LocalServiceConst.AUTHENTICATION_TOKEN);
    }
  }