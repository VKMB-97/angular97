import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable()
export class LoginserviceService {

  private messagename = new BehaviorSubject<string>('default message');
  currentname = this.messagename.asObservable();

  constructor() { }

  getname()
  {
    return this.messagename.asObservable();
  }
  

}