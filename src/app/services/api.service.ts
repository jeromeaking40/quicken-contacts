import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API = 'http://demo5838836.mockable.io/contact';
  errorMessage: string;

  constructor(public http: HttpClient) {}

  get(): Observable<any> {
    return this.http
      .get(this.API)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error(error);

    this.errorMessage = error.message;

    // return an observable with a user-facing error message
    return throwError(this.errorMessage);
  }
}
