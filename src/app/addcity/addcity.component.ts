import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }
onSubmit(form: NgForm){
  this.weatherService.addCityWeather(form.value).subscribe((response)=>{
  console.log(response);})
}

}

