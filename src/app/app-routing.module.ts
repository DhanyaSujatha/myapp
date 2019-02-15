import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth-guard';
import { AuthService } from './auth.service';



const routes: Routes = [
    {path: '', component:AboutComponent},
    {path: 'home', component:HomeComponent, canActivate:[AuthGuard]},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component:LoginComponent},
    {path: 'logout', component:LogoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthService,AuthGuard]
})
export class AppRoutingModule { }
