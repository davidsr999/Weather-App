import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Coord, WeatherData } from "src/app/shared/interfaces/weather.interfaces";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class Weatherservice {

    private readonly API_URL = environment.openWeather.url;

    constructor(private readonly http: HttpClient) {}

    public getWeatherByName(lat: string, lon: string): Observable<WeatherData> {
        const params = new HttpParams()
        // .set('q', city)
        .set('lat', lat)
        .set('lon', lon)
        // .set('units', 'metric')
        // .set('appid', environment.openWeather.key)
        return this.http.get<WeatherData>(`${this.API_URL}/weather`,
            {params});
    }

    // public getWeatherByCoords(coord:Coord):Observable<WeatherData> {
    //     const params = new HttpParams()
    //     // .set('unit', 'metric')
    //     // .set('appid', environment.openWeather.key)

    //     return this.http.get<WeatherData>(`${this.API_URL}/weather`, {params});
    // }
}