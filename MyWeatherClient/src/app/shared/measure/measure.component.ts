import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.css']
})
export class MeasureComponent implements OnInit {
  private _celsius: boolean = true;
  public get celsius(): boolean {
    return this._celsius;
  }
  public set celsius(value: boolean) {
    this._celsius = value;
  }

  private _farenhait: boolean = false;
  public get farenhait(): boolean {
    return this._farenhait;
  }
  public set farenhait(value: boolean) {
    this._farenhait = value;
  }

  @Output() measureChange: EventEmitter<string>= new EventEmitter<string>();

  toggleMeasure(measure: string): void{    
    if (measure=='C')
    {
      this.celsius=true;
      this.farenhait=false;      
    }
    else
    {
      this.celsius=false;
      this.farenhait=true;      
    }        
    this.measureChange.emit(measure);
  }

  constructor() { }

  ngOnInit() {
  }

}
