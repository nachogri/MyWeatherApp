import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentComponent } from './weather/current/current.component';
import { MeasureComponent } from './shared/measure/measure.component';
import { ForecastComponent } from './weather/forecast/forecast.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    MeasureComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'current',component:CurrentComponent},
      {path:'forecast',component:ForecastComponent},
      {path:'',redirectTo:'current',pathMatch:'full'},
      {path:'**',redirectTo:'current',pathMatch:'full'}
    ]),
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
