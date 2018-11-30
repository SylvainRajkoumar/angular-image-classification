import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sessionService: SessionService,
    private router: Router) {
      // if(this.sessionService.isConnected){
      //   // (<HTMLElement>document.getElementById("test").children[1]).style.display = "none"
      // }
   }
   logout(){
     if(this.sessionService.isConnected){
       this.sessionService.logout();
       this.router.navigate(['/']);
     }
   }

  ngOnInit() {
  }

}
