import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Constants from './../app-constants';
import { map } from 'rxjs/operators';

@Injectable()
export class WindowService {
  private endpoint: string = 'window';

  constructor(private http: HttpClient) {}

  public getWindows(): Observable<any> {
    console.log(`${Constants.APP_URI}/${this.endpoint}/open`);
    return this.http.get<any>(`${Constants.APP_URI}/${this.endpoint}/open`).pipe(
      map((response: any) => {
        console.log('here', response);
        return response;
      })
    );
  }

  public openWindow(): Observable<any> {
    console.log(`${Constants.APP_URI}/${this.endpoint}/open`);
    return this.http.get<any>(`${Constants.APP_URI}/${this.endpoint}/open`);
  }

  public closeWindow(): Observable<any> {
    console.log(`${Constants.APP_URI}/${this.endpoint}/close`);
    return this.http.get<any>(`${Constants.APP_URI}/${this.endpoint}/close`);
  }

  public activateWindow() {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http
      .post(`${Constants.APP_URI}/${this.endpoint}/close`, { headers: headers })
      .pipe(map((response: any) => response));
  }
}
