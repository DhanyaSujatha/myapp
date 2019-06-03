import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  cityName='';

city:string;
 
  state: string;
  temp: number;
  tempMax: number;
  rise: string;
  set: string;
  hum: number;
  wind: number;
  like: number;
weatherData:any;


 day1Name: string; day1State: string; day1Temp: number;
 day2Name: string; day2State: string; day2Temp: number;
 day3Name: string; day3State: string; day3Temp: number;
 day4Name: string; day4State: string; day4Temp: number;
 day5Name: string; day5State: string; day5Temp: number
 day6Name: string;day6State: string;day6Temp: number
 day7Name: string;day7State: string;day7Temp: number
 day8Name: string;day8State: string;day8Temp: number
 day9Name: string;day9State: string;day9Temp: number
 day10Name: string;day10State: string; day10Temp: number




weatherNowSub:Subscription;
ThreeHForecastSub:Subscription;


 
   

  constructor(private weatherService:WeatherService, private sanitizer: DomSanitizer) {
    
   }
  
  ngOnInit() {
    
    
 
    this.weatherNowSub=this.weatherService.getWeather(this.city).subscribe((response)=>{
     
      console.log(response);
    this.weatherData=response['weather'][0];
  this.city=response['name'];
this.state=response['weather'][0].main;
this.temp=Math.round(response['main'].temp-273.1);
this.tempMax=Math.round(response['main'].temp_max-273.1);
this.rise= new Date(response['sys'].sunrise).toLocaleTimeString();
this.set=new Date(response['sys'].sunset).toLocaleTimeString();
this.wind=Math.round(response['wind'].speed*3.6);
this.like=Math.round(response['main'].humidity-82);
})
const days=['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  this.ThreeHForecastSub=this.weatherService.getForecast(this.city).subscribe((data)=>{
  console.log(data);

  this.day1Name = days[new Date(data['list'][0].dt_txt).getDay()]+' '+new Date(data['list'][0].dt_txt).toLocaleTimeString();
  this.day1State =data['list'][0]['weather'][0].main;
  this.day1Temp= Math.round(data['list'][0]['main'].temp-273.1);    
  this.day2Name = days[new Date(data['list'][1].dt_txt).getDay()]+' '+new Date(data['list'][1].dt_txt).toLocaleTimeString();
  this.day2State= data['list'][1]['weather'][0].main,
  this.day2Temp= Math.round(data['list'][1]['main'].temp-273.1);
  this.day3Name= days[new Date(data['list'][2].dt_txt).getDay()]+' '+new Date(data['list'][2].dt_txt).toLocaleTimeString();
  this.day3State= data['list'][2]['weather'][0].main;
  this.day3Temp= Math.round(data['list'][2]['main'].temp-273.1);
  this.day4Name  = days[new Date(data['list'][3].dt_txt).getDay()]+' '+new Date(data['list'][3].dt_txt).toLocaleTimeString();
  this.day4State= data['list'][3]['weather'][0].main;
  this.day4Temp= Math.round(data['list'][3]['main'].temp-273.1);
  this.day5Name = days[new Date(data['list'][4].dt_txt).getDay()]+' '+new Date(data['list'][4].dt_txt).toLocaleTimeString();
  this.day5State= data['list'][4]['weather'][0].main;
  this.day5Temp= Math.round(data['list'][4]['main'].temp-273.1);
  this.day6Name = days[new Date(data['list'][5].dt_txt).getDay()]+' '+new Date(data['list'][5].dt_txt).toLocaleTimeString();
  this.day6State= data['list'][5]['weather'][0].main;
  this.day6Temp= Math.round(data['list'][5]['main'].temp-273.1);
  this.day7Name = days[new Date(data['list'][6].dt_txt).getDay()]+' '+new Date(data['list'][6].dt_txt).toLocaleTimeString();
  this.day7State= data['list'][6]['weather'][0].main;
  this.day7Temp= Math.round(data['list'][6]['main'].temp-273.1);
  this.day8Name = days[new Date(data['list'][7].dt_txt).getDay()]+' '+new Date(data['list'][7].dt_txt).toLocaleTimeString();
  this.day8State=data['list'][7]['weather'][0].main;
  this.day8Temp= Math.round(data['list'][7]['main'].temp-273.1);
  this.day9Name= days[new Date(data['list'][8].dt_txt).getDay()]+' '+new Date(data['list'][8].dt_txt).toLocaleTimeString();
  this.day9State= data['list'][8]['weather'][0].main;
  this.day9Temp= Math.round(data['list'][8]['main'].temp-273.1);
  this.day10Name = days[new Date(data['list'][9].dt_txt).getDay()]+' '+new Date(data['list'][9].dt_txt).toLocaleTimeString();
  this.day10State= data['list'][9]['weather'][0].main;
  this.day10Temp= Math.round(data['list'][9]['main'].temp-273.1);
 
       
    })

}

getImg(){
  return this.state =='Snow' ? "url('https://media.giphy.com/media/7Bgpw7PwdxoDC/giphy.gif')" : this.state =='Clear' ? "url('https://media1.giphy.com/media/u01ioCe6G8URG/giphy.gif')":this.state =='Rain' ? "url('http://www.mytinyphone.com/uploads/users/leblanc7/395572.gif')":this.state =='Clouds' ? "url('https://thumbs.gfycat.com/ElectricAltruisticDore-size_restricted.gif')": this.state =='Clear' ? "url('https://media1.giphy.com/media/u01ioCe6G8URG/giphy.gif')":this.state =='Rain' ? "url('http://www.mytinyphone.com/uploads/users/leblanc7/395572.gif')":this.state =='Mist' ? "url('https://media.giphy.com/media/yhZr5Wx7CBFbq/giphy.gif')": 'transparent';
}
Img(){
  return this.state =='Snow' ? "url('https://images-na.ssl-images-amazon.com/images/I/61xqNtYlNnL._SY355_.jpg')" : this.state =='Clear' ? "url('https://ak5.picdn.net/shutterstock/videos/4044025/thumb/1.jpg')" :this.state =='Rain' ? "url('http://www.rcinet.ca/eye-on-the-arctic/wp-content/uploads/sites/30/2017/08/rain-expected-in-lapland-as-sun-shines-over-finland-2-1024x678.jpg')" : this.state =='Clouds' ? "url('https://www.southwalesargus.co.uk/resources/images/5360796.jpg?display=1&htype=0&type=responsive-gallery')":this.state =='Mist' ? "url('https://vignette.wikia.nocookie.net/demigodshaven/images/f/f5/Mist.jpg/revision/latest?cb=20110102163040')":'transparent';
}
getUrl(){
  return "url('http://www.bviddm.com/wp-content/uploads/2015/10/weather-forecast-640x465.jpg')";
}

ngOnDestroy(){
  this.ThreeHForecastSub.unsubscribe();
  this.weatherNowSub.unsubscribe();
}
}

   


