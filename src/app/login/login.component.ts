


import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Router } from "@angular/router";
import { subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

name:string;
  constructor(private router: Router,private loginservice:LoginserviceService) { 
    
  }
  getName(n)
  {
    this.name=n;
    this.subscription = this.loginservice.getname().subscribe(messagename => this.name =messagename);
  }
  ngOnInit() {
  }

}