import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';


@Injectable({ providedIn: 'root'})
export class LoginserviceService {

  private messagename = new BehaviorSubject<string>('current');
  currentname = this.messagename.asObservable();


  constructor() { }
updatename(name:string)
{
this.messagename.next(name);
}


  

}