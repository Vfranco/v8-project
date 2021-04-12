import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(`${environment.APIURL}/db`);
  }

  public getKeyData(key: string): Observable<any> {
    return this.http.get(`${environment.APIURL}/${key}`);
  }

  public pagination(key: string, page: string): Observable<any> {
    return this.http.get(`${environment.APIURL}/${key}?_page=${page}&_limit=5`)
  }
}
