import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  
  constructor(public sessionService: SessionService){

  }

  triggerLogout(){
    this.sessionService.logout()
  }
}
