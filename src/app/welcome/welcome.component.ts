import { Component, OnInit} from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
msgename:string;

    constructor(private loginservice:LoginserviceService) {
    }
  

  ngOnInit() {
    this.loginservice.currentname.subscribe(messagename => this.msgename = messagename);
   
  }
  
  
 
}