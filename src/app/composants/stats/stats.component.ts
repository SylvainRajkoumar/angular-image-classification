import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(public sessionService: SessionService,
    private router: Router) { 
    if(this.sessionService.isConnected == false){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

}
