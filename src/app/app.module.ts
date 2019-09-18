import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginserviceService } from './loginservice.service';
import {WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
  { path: 'login', component:LoginComponent  },
  {path:'home',component:HomeComponent},
   {path:'logout',component:LogoutComponent},
   {path:'welcome',component:WelcomeComponent},
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) ],
  declarations: [ AppComponent, LoginComponent, HomeComponent, LogoutComponent,WelcomeComponent],
  bootstrap:    [ AppComponent ],
  providers: [LoginserviceService]
})
export class AppModule { }
