import { Component, OnInit } from '@angular/core';
import { ICondition } from '../condition';
import { ConditionsService } from '../conditions.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  measure:string='C';
  condition: ICondition;
  errorMessage: string;

  constructor(private conditionService: ConditionsService) { }

  ngOnInit() {
      this.conditionService.getConditions().subscribe(
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
