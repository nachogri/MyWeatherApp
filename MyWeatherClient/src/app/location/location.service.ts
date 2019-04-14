import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap , catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {  
  //private url:string="api/location.json";
  private url:string="https://ipapi.co/json";  

  getCurrentLocation(): Observable<any> {
        
        return this.http.get(this.url).pipe(      
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
