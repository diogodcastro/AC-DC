import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Constants from './../app-constants';
import { map } from 'rxjs/operators';

@Injectable()
export class WindowService {
  private endpoint: string = 'window';

  constructor(private http: HttpClient) {}

  public getEquipments(): Observable<Window[]> {
    return this.http.get<Window[]>(`${Constants.APP_URI}/${this.endpoint}`).pipe(
      map((response: Window[]) => {
        return response;
      })
    );
  }

  public saveEquipment(equipment: Window): Observable<Window> {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http
      .post<Window>(`${Constants.APP_URI}/${this.endpoint}`, equipment, { headers: headers })
      .pipe(map((response: any) => response));
  }
}
