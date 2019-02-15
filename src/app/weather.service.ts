import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  

  constructor(private http:HttpClient) {
    
   }
  getWeather(city:string){
 

  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=530c0aeaf60dfa236ed78e6e99878d4c');
  }
  getForecast(city:string){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=Toronto&APPID=530c0aeaf60dfa236ed78e6e99878d4c');
  }

  
  
  }