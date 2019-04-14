import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap , catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {  
  getCurrentLocation(): Observable<any> {
        return this.http.get('http://ipinfo.io').pipe(      
          tap(data=> console.log('All:' + data)),
          catchError(this.handleError));
  }

  private handleError(err:HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
    }

    constructor(private http:HttpClient) {}    
}
