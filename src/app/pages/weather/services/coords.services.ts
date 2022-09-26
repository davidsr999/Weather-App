import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {  CoordsNameData } from "src/app/shared/interfaces/coords.interfaces";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class NameToCoordService {

    private readonly API_URL = environment.coordNames.url;

    constructor(private readonly http: HttpClient) {}

    public getNameByCoords(name: string): Observable<CoordsNameData> {
        const params = new HttpParams()
        // .set('q', city)
        .set('q', name)
        .set('appid', environment.coordNames.key)
        // .set('units', 'metric')
        // .set('appid', environment.openWeather.key)
        return this.http.get<CoordsNameData>(`${this.API_URL}/direct`,
            {params});
    }

}





