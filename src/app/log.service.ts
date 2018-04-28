import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ILog } from './log';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LogService {

  // TODO: change to point to web server
  private _url: string = '/assets/data/logs.json';

  constructor(private http: HttpClient) { }

  getLogs(): Observable<ILog[]> {
    return this.http.get<ILog[]>(this._url)
        .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
}
