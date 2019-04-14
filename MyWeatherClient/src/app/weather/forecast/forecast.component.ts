import { Component, OnInit } from '@angular/core';
import { ICondition } from '../condition';
import { ConditionsService } from '../conditions.service';
import { LocationService } from 'src/app/location/location.service';
import { ILocation } from 'src/app/location/location';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  measure:string='C';
  condition: ICondition;
  errorMessage: string;
  currentLocation:ILocation;

  constructor(private conditionService: ConditionsService, private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getCurrentLocation().subscribe(
      (data:ILocation) => {
        this.currentLocation=data;
        
        this.conditionService.getConditions(this.currentLocation.city).subscribe(
          (data:ICondition) => {
            this.condition = JSON.parse(data.toString());              
          },
          error => this.errorMessage= <any> error
        );
      },
      error => this.errorMessage= <any> error
    )        
  }

  onMeasureChange(measure: string):void{
    this.measure=measure;
  }
}
