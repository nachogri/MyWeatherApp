import { Component, OnInit } from '@angular/core';
import { ConditionsService } from '../conditions.service';
import { ICondition } from '../condition';
import { LocationService } from 'src/app/location/location.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {  
  measure:string='C';
  condition: ICondition;
  errorMessage:string;
  currentLocation:any;
 
  constructor(private conditionService: ConditionsService, private locationService: LocationService) { }

  ngOnInit() {
      this.locationService.getCurrentLocation()
      .subscribe(
        data => this.currentLocation = data,
        error => this.errorMessage= <any> error
      )
        
      this.conditionService.getConditions()          
          .subscribe(       
            (data:ICondition) => {
              this.condition = JSON.parse(data.toString());                            
            },
            error => this.errorMessage= <any> error            
      );      
    }  
    

  onMeasureChange(measure: string):void{
    this.measure=measure;
  }
}
