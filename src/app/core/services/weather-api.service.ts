import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private API_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast'
  private API_KEY = 'bcb7c4d98e8c03a049d1024d4b5a1573'

  constructor(private http: HttpClient) { }


  searchWeather(data?: string): Observable<any> {
    console.log('Service Calling', data)
    return this.http.get(`${this.API_BASE_URL}?q=${data}&appid=${this.API_KEY}&units=metric`)
  }
}
