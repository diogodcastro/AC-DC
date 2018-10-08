import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Constants from '../app-constants';
import { map } from 'rxjs/operators';

@Injectable()
export class WindowsService {
  private endpoint: String = 'windows';

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

  public openWindows(): Observable<any> {
    console.log(`${Constants.APP_URI}/${this.endpoint}/open`);
    return this.http.get<any>(`${Constants.APP_URI}/${this.endpoint}/open`);
  }

  public closeWindows(): Observable<any> {
    console.log(`${Constants.APP_URI}/${this.endpoint}/close`);
    return this.http.get<any>(`${Constants.APP_URI}/${this.endpoint}/close`);
  }

}
