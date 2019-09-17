import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {name} from './login/login.component'

@Injectable()
export class LoginserviceService {
private subject = new Subject<any>();
  constructor() { }
  sendName(name:string)
  {
    this.subject.next({ text :name });
  }
  getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}