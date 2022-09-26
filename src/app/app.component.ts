import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NameToCoordService } from './pages/weather/services/coords.services';
import { Weatherservice } from './pages/weather/services/weather.services';
import {  CoordsNameData } from './shared/interfaces/coords.interfaces';
import { WeatherData } from './shared/interfaces/weather.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'second-weather';
  public weather$!: Observable<WeatherData>;
  weatcherResult: WeatherData;
  public coords$!: Observable<CoordsNameData>;
  result: any;
  coordresult: any;
  lon: string;
  lat: string;

  proveweather: WeatherData;

  constructor(private readonly weatherSvc: Weatherservice, 
    private readonly coordsSvc: NameToCoordService) {}


  ngOnInit(): void {
    

    // this.coords$ = this.coordsSvc.getNameByCoords('Ontinyent');
    // this.coords$.subscribe(
    //   item => {
    //     this.coordresult = item;
    //     this.lat = this.coordresult[0].lat;
    //     this.lon = this.coordresult[0].lon;



    //     this.weather$ = this.weatherSvc.getWeatherByName(this.lat, this.lon);
    //   this.weather$.subscribe(
    //   item => {
    //     this.result = item.main;
    //     console.log(item.main);
    //     console.log(this.result)
    //   });
    //   }
      
    // )

    
    

  }


  public onCoords(name: string) {
    // console.log(name);
    // console.log(this.coordsSvc.getNameByCoords(name));
    this.coords$ = this.coordsSvc.getNameByCoords(name);
    console.log(this.coords$);

  }




  public onSearch(name: string) {
    // lat:x, lon:y
    // lat:39.466667, lon:-0.375000
    // let lat = '39.466667';
    // let lon = '-0.375000';
    // let arrayString = mystring.split(", ");
    // let lat = arrayString[0].slice(4);
    // let lon = arrayString[1].slice(4);
    // console.log("lat = "+ lat + " " + "lon = "+ lon);

    // this.weather$ = this.weatherSvc.getWeatherByName(lat,lon);
    // console.log(this.weather$);
    this.coords$ = this.coordsSvc.getNameByCoords(name);
    this.coords$.subscribe(item => {
      this.coordresult = item;
      this.lat = this.coordresult[0].lat;
      this.lon = this.coordresult[0].lon;
      this.weather$ = this.weatherSvc.getWeatherByName(this.lat, this.lon);
      this.weather$.subscribe(item => this.weatcherResult = item);
    })

  }










}
