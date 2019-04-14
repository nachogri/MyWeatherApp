export interface ICondition {
    location: string;
    current: ICurrent;
    forecast: IForecast[];
  }

  export interface ICurrent{
    date: string,
    temperatureCelsious: number,
    temperatureFahrenheit:number,
    conditions:{
        text: string,
        icon: string            
    },
    humidity:number,
    windKph: number,
    windDir: string,
    precipitationMm:number
  }

export interface IForecast{
  date:string,
  minTemperatureCelsious:number,
  maxTemperatureCelsious:number,
  minTemperatureFahrenheit:number,  
  maxTemperatureFahrenheit:number,
  conditions:{
      text: string,
      icon: string
  },
  avgHumidity:number,
  maxWindKph:number,
  totalPrecipitationMm:number
}