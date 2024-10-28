import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { toasterDTO } from "./dto/toaster-option.dto";

@Injectable({
    providedIn: 'root'
  })
  export class ToasterService {
    private toasterAction = new Subject<boolean>();
    toasterAction$ = this.toasterAction.asObservable();
  
    // private toasterTimer = new Subject<boolean>();
    // toasterTimer$ = this.toasterTimer.asObservable();
  
    private toasterIcon = new Subject<'success' | 'error' | 'warning' | 'info'>();
    toasterIcon$ = this.toasterIcon.asObservable();

    private toasterInfo = new Subject<toasterDTO>();
    toasterInfo$ = this.toasterInfo.asObservable();
  
  
    success(title: string, timer? : number, message?: string) {
        this.toasterIcon.next('success')
        this.toasterInfo.next({
            title: title,
            message: message
        })
        this.toasterAction.next(true);
        if (timer){
            setTimeout(() => {
                this.toasterAction.next(false);
            }, timer)
        }
    }

    error(title: string, timer? : number, message?: string) {
        this.toasterIcon.next('error')
        this.toasterInfo.next({
            title: title,
            message: message
        })
        this.toasterAction.next(true);
        if (timer){
            setTimeout(() => {
                this.toasterAction.next(false);
            }, timer)
        }
    }

    info(title: string, timer? : number, message?: string) {
        this.toasterIcon.next('info')
        this.toasterInfo.next({
            title: title,
            message: message
        })
        this.toasterAction.next(true);
        if (timer){
            setTimeout(() => {
                this.toasterAction.next(false);
            }, timer)
        }
    }

    warning(title: string, timer? : number, message?: string) {
        this.toasterIcon.next('warning')
        this.toasterInfo.next({
            title: title,
            message: message
        })
        this.toasterAction.next(true);
        if (timer){
            setTimeout(() => {
                this.toasterAction.next(false);
            }, timer)
        }
    }

    closeToaster(){
        this.toasterAction.next(false);
    }
  
  }
  