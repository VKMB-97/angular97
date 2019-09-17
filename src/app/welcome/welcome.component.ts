import { Component, OnInit} from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    name$: any;
    subscription: Subscription;

    constructor( private loginservice: LoginserviceService) {
      this.name$ = this.LoginserviceService.getMessage();
    }
  

  ngOnInit() {
  }
 
}