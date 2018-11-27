import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  validEmail = 'Test';
  validPassword = '1234';
  isConnected = false;

  constructor() {}

  login(email, password){
    if(email == this.validEmail && password == this.validPassword){
      this.isConnected = true;
    }
  }
}
