import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CoordsNameData } from 'src/app/shared/interfaces/coords.interfaces';
import { WeatherData } from 'src/app/shared/interfaces/weather.interfaces';
import { NameToCoordService } from './services/coords.services';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {
  @Input() public weather!: WeatherData;
  // @Input() public coords!: CoordsNameData;

  // lat: number = this.coords.lat;
  // lon: number = this.coords.lon;
  // http://openweathermap.org/img/wn/10d@2x.png
  public BASE_URL = 'http://openweathermap.org/img/wn/'

  constructor() { }

  ngOnInit(): void {
    // console.log(this.coords.local_names)
    
  }

}
