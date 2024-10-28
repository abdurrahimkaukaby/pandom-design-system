import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { HttpParamsUtil } from '../../core/utils/http-params.utils';

@Injectable()
export abstract class BaseService implements OnDestroy {
  http: HttpClient;
  httpParamUtil: HttpParamsUtil;

  private readonly unsubscribe$ = new Subject();

  constructor(client: HttpClient) {
    this.http = client;
    this.httpParamUtil = new HttpParamsUtil();
  }

  get<T>(url: string, httpParams?: any): Observable<T> {
    return this.http.get<T>(url, { params: httpParams! });
  }

  getCustomUrlWithHeader<T>(
    url: string,
    headers: HttpHeaders
  ): Observable<any> {
    return this.http.get<T>(`${url}`, { headers });
  }

  post<T>(url: string, requestBody: any, headers?: any): Observable<T> {
    return this.http.post<T>(url, requestBody, { headers });
  }

  put<T>(url: string, id: number | string, requestBody: any): Observable<T> {
    return this.http.put<T>(`${url}/${id}`, requestBody);
  }

  patch<T>(url: string, id: number, requestBody: T): Observable<T> {
    return this.http.patch<T>(`${url}/${id}`, requestBody);
  }

  delete<T>(url: string, id: number | string): Observable<T> {
    return this.http.delete<T>(`${url}/${id}`);
  }

  show<T, U extends any>(url: string, httpParams?: T): Observable<U> {
    let params: HttpParams = <HttpParams>{};

    if (httpParams) {
      params = this.httpParamUtil.generateHttpParams(httpParams as object);
    }
    return this.http.get<U>(`${url}`);
  }

  private getFileNameFromResponse(response: any): string {
    const contentDispositionHeader = response.headers.get(
      'Content-Disposition'
    );
    const matches = contentDispositionHeader.match(
      /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
    );

    console.log('matches => ', matches);
    const fileName = matches && matches.length > 1 ? matches[1] : 'unknown';
    return fileName;
  }

  encodeFormData(formData: any) {
    const urlSearchParams = new URLSearchParams();

    for (const key of Object.keys(formData)) {
      urlSearchParams.append(key, formData[key]);
    }

    return urlSearchParams.toString();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }
}
