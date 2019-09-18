import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

name:string;
subscription: Subscription;
  constructor(private router: Router,private loginservice:LoginserviceService) { 
     
  }
  getName(n)
  {
    this.name=n;
    this.loginservice.updatename(this.name);
  }
  ngOnInit() {
  
  }

}