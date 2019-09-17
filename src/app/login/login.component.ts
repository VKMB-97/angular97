import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

name:string;
  constructor() { 

  }

  ngOnInit() {
  }
  onClickMe()
  {
    this.name=(document.getElementById("loginname")as HTMLInputElement).value;
  }
  sendName():void
  {
     this.loginservice.sendName(name);
  }

}