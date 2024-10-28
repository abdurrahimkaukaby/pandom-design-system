import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpService } from '../../providers/http/http.service';
import { UploadFileDTO } from '../dto/upload-file.dto';
import { HttpResult } from '../dto/http-result.dto';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService extends HttpService {

  constructor(private readonly _httpClient: HttpClient) {
    super(_httpClient);
  }

  storeData(requestBody: FormData): Observable<HttpResult<{fullPath : string}>> {
    return this.post(
      `${environment.host.etma.url}/master-data/${environment.host.etma.apiVersion}/upload`,
      requestBody
    );
  }
}
