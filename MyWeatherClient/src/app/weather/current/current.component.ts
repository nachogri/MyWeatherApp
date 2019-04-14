import { Component, OnInit } from '@angular/core';
import { ConditionsService } from '../conditions.service';
import { ICondition } from '../condition';
import { LocationService } from 'src/app/location/location.service';
import { ILocation } from 'src/app/location/location';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {  
  measure:string;
  condition: ICondition;
  errorMessage:string;
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
