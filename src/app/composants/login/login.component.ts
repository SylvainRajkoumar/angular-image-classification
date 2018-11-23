import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  email:String;
  password:String;
  
  constructor(private sessionService: SessionService,
    private router: Router) {

  }

  sendDataToSessionService(){
    this.sessionService.login(this.email, this.password)
    if(this.sessionService.isConnected){
      this.router.navigate(['/stats']);
    }
  }

}
