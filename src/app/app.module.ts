import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavlistComponent } from './navigation/sidenavlist/sidenavlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddcityComponent } from './addcity/addcity.component';
import { HeaderComponent } from './navigation/header/header.component';

import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavlistComponent,
    AddcityComponent,
    HeaderComponent
    
   
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    A11yModule
   
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
