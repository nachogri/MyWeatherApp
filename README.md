# MyWeatherApp
This is a sample web app that shows current weather conditions

The Frontend MyWeatherClient is an Angular App using Bootstrap for styling. The app has the following building blocks:

Modules:
- AppModule: Main App module

Components
- AppComponent: Main App component
- CurrentComponent: For the Today's weather feature
- ForecastComponent: For the 5 day weather forecast feature
- MeasureComponent: For the Celsius vs Farenheit swapping feature

Services:
- WeatherService: For providing weather data coming from BackEnd
- LocationService: For providing location data coming from 3rd party API

The BackEnd MyWeatherAPI is a C# WebAPI that exposes a Conditions Resource and a Get method with location and forcast days number as required parameters. This API is hosted in Azure and can be consumed through the following endpoint: https://myweatherapi.azurewebsites.net/api/conditions?location=[desired location]&days=[desired number of days]

This API consumes weather data from a 3rd party API.
