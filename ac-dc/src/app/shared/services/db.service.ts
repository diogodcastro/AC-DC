import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Controller } from '../models/controller.model';
import * as Constants from './../app-constants';
import { map } from 'rxjs/operators';
import { Windows } from '../models/windows.model';

@Injectable()
export class DbService {
  private endpoint: string = 'controller';

  constructor(private httpService: HttpClient) {}

  public getController(controlerId: string): Observable<Controller> {
    return this.httpService.get<Controller[]>(`${Constants.APP_DB}/${this.endpoint}/${controlerId}`).pipe(
      map((response: any) => {
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
  public updateController(controller: Controller): Observable<Controller> {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.httpService
      .put<Controller>(`${Constants.APP_DB}/${this.endpoint}/${controller.id}`, controller, { headers: headers })
      .pipe(map((response: Controller) => response));
  }

  public newWindows(windows: Windows): Observable<Windows> {
    console.log('here window dbService', windows);
    return this.httpService
      .post<Windows>(`${Constants.APP_DB}/${this.endpoint}/1`, windows)
      .pipe(map((response: Windows) => response));
  }
}
