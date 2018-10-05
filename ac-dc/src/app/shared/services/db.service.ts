import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Controller } from '../models/controller.model';
import * as Constants from './../app-constants';
import { map } from 'rxjs/operators';

@Injectable()
export class DbService {
  private endpoint: string = 'controller';

  constructor(private httpService: HttpClient) {}

  public getController(controlerId: string): Observable<Controller> {
    return this.httpService.get<Controller[]>(`${Constants.APP_DB}/${this.endpoint}/${controlerId}`).pipe(
      map((response: Window[]) => {
        return response;
      })
    );
  }
  public getAllControllers(): Observable<[Controller]> {
    return this.httpService.get(`${Constants.APP_DB}/${this.endpoint}`).pipe(
      map((response: [Controller]) => {
        return response;
      })
    );
  }

  public newController(controller: Controller): Observable<Controller> {
    return this.httpService
      .post(`${Constants.APP_DB}/${this.endpoint}`, controller)
      .pipe(map((response: Controller) => response));
  }

  public updateController(controller: Controller): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.httpService
      .post<Window>(`${Constants.APP_URI}/${this.endpoint}`, controller, { headers: headers })
      .pipe(map((response: any) => response));
  }
}
