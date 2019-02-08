import { Component, OnInit, OnDestroy, Output  } from '@angular/core';
import { WeatherService } from '../weather.service';

import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

city:string;
  
  state: string;
  temp: number;
  hum: number;
  wind: number;
weatherData:any;

@Output() day1:Array<{day1Name: string, day1State: string, day1Temp: number}>=[];
@Output() day2:Array<{day2Name: string, day2State: string, day2Temp: number}>=[];
@Output() day3:Array<{day3Name: string, day3State: string, day3Temp: number}>=[];
@Output() day4:Array<{day4Name: string, day4State: string, day4Temp: number}>=[];
@Output() day5:Array<{day5Name: string, day5State: string, day5Temp: number}>=[];
@Output() day6:Array<{day6Name: string, day6State: string, day6Temp: number}>=[];
@Output() day7:Array<{day7Name: string, day7State: string, day7Temp: number}>=[];
@Output() day8:Array<{day8Name: string, day8State: string, day8Temp: number}>=[];
@Output() day9:Array<{day9Name: string, day9State: string, day9Temp: number}>=[];
@Output() day10:Array<{day10Name: string, day10State: string, day10Temp: number}>=[];




weatherNowSub:Subscription;
ThreeHForecastSub:Subscription;


 
   

  constructor(private weatherService:WeatherService, ) {
    
   }
  
  ngOnInit() {
    
 
    this.weatherNowSub=this.weatherService.getWeather(this.city).subscribe((response)=>{
     
      console.log(response);
    this.weatherData=response['weather'][0];
  this.city=response['name'];
this.state=response['weather'][0].main;
this.temp=Math.round(response['main'].temp-273.1);
})
const days=['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  this.ThreeHForecastSub=this.weatherService.getForecast(this.city).subscribe((data)=>{
  console.log(data);

  this.day1 = [days[new Date(data['list'][0].dt_txt).getDay()]+' '+[new Date(data['list'][0].dt_txt).toLocaleTimeString()],data['list'][0]['weather'][0].main,Math.round(data['list'][0]['main'].temp-273.1)];    
  this.day2 = [days[new Date(data['list'][1].dt_txt).getDay()]+' '+[new Date(data['list'][1].dt_txt).toLocaleTimeString()],data['list'][1]['weather'][0].main,Math.round(data['list'][1]['main'].temp-273.1)];
  this.day3 = [days[new Date(data['list'][2].dt_txt).getDay()]+' '+[new Date(data['list'][2].dt_txt).toLocaleTimeString()],data['list'][2]['weather'][0].main,Math.round(data['list'][2]['main'].temp-273.1)];
  this.day4 = [days[new Date(data['list'][3].dt_txt).getDay()]+' '+[new Date(data['list'][3].dt_txt).toLocaleTimeString()],data['list'][3]['weather'][0].main,Math.round(data['list'][3]['main'].temp-273.1)];
  this.day5 = [days[new Date(data['list'][4].dt_txt).getDay()]+' '+[new Date(data['list'][4].dt_txt).toLocaleTimeString()],data['list'][4]['weather'][0].main,Math.round(data['list'][4]['main'].temp-273.1)];
  this.day6 = [days[new Date(data['list'][5].dt_txt).getDay()]+' '+[new Date(data['list'][5].dt_txt).toLocaleTimeString()],data['list'][5]['weather'][0].main,Math.round(data['list'][5]['main'].temp-273.1)];
  this.day7 = [days[new Date(data['list'][6].dt_txt).getDay()]+' '+[new Date(data['list'][6].dt_txt).toLocaleTimeString()],data['list'][6]['weather'][0].main,Math.round(data['list'][6]['main'].temp-273.1)];
  this.day8 = [days[new Date(data['list'][7].dt_txt).getDay()]+' '+[new Date(data['list'][7].dt_txt).toLocaleTimeString()],data['list'][7]['weather'][0].main,Math.round(data['list'][7]['main'].temp-273.1)];
  this.day9 = [days[new Date(data['list'][8].dt_txt).getDay()]+' '+[new Date(data['list'][8].dt_txt).toLocaleTimeString()],data['list'][8]['weather'][0].main,Math.round(data['list'][8]['main'].temp-273.1)];
  this.day10 = [days[new Date(data['list'][9].dt_txt).getDay()]+' '+[new Date(data['list'][9].dt_txt).toLocaleTimeString()],data['list'][9]['weather'][0].main,Math.round(data['list'][9]['main'].temp-273.1)];
 
       
    })

}
ngOnDestroy(){
  this.ThreeHForecastSub.unsubscribe();
  this.weatherNowSub.unsubscribe();
}
}

   


