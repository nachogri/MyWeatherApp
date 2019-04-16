# MyWeatherApp
This is a sample web app that shows current weather conditions

The Front End is an Angular 7 app with the following elements:

Modules:
- AppModule: Main App module

Components
- AppComponent: Main App component
- CurrentComponent: For the Today's weather feature
- ForecastComponent: For the 5 day weather feature
- MeasureComponent: For the Celsius vs Farenheit swapping feature

Services:
- WeatherService: For providing weather data coming from BackEnd
- LocationService: For providing location data coming from 3rd party API

The BackEnd is a C# WebAPI that exposes a Conditions Resource and a Get method with location and forcast days number as required paremeters.

This API consumes weather data from 3rd party API and exposes it to be consumed by the FrontEnd 
