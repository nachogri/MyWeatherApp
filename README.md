# MyWeatherApp
This is a sample web app that shows current weather conditions

The Frontend is based an Angular App using Bootstrap for styling. The app has the following building blocks:

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

The BackEnd is a C# WebAPI that exposes a Conditions Resource and a Get method with location and forcast days number as required paremeters. This API is hosted in Azure and can be consumed through the following endpoint: https://myweatherapi.azurewebsites.net/api/conditions?location=[desired location]&days=[desired number of days]

This API consumes weather data from 3rd party API and exposes it to be consumed by the FrontEnd 
