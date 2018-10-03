import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServiceService {
  private endpoit: string = '';

  constructor(private http: HttpClient) {}
}
