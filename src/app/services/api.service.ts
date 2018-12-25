import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

const client_id = 'dd78ad563f3b4370a1caae2408ab8ad8';
const pass = 'ee4a6f720dca4c05a776a4dbd720c207';
const callback = 'http://localhost:4200/';
const url = 'https://cloud-api.yandex.net/v1/disk/resources?path=';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  access_token: string;
  constructor(private http: HttpClient) {
  }

  public getDirectory(path='/'): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'OAuth ' + this.access_token
      })
    };
    return this.http.get(url + path + '&access_token=' + this.access_token, httpOptions);
  }
}
