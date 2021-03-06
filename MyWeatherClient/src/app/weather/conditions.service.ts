import { Injectable } from '@angular/core';
import { ICondition } from './condition';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConditionsService {
    private currentLocation:string;    
    private myWeatherApiUrl:string;      

  getConditions(currentLocation:string):Observable<ICondition> {       
    this.currentLocation=currentLocation;
    //this.myWeatherApiUrl='http://localhost:49169/api/conditions?location=' + this.currentLocation + '&days=5' ;      
    this.myWeatherApiUrl='https://myweatherapi.azurewebsites.net/api/conditions?location=' + this.currentLocation + '&days=5' ;
    
   return this.http.get<ICondition>(this.myWeatherApiUrl).pipe(      
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
