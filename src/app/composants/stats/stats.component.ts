import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { MonitoringService } from '../../services/monitoring.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(public sessionService: SessionService,
    private router: Router, public monitoringService: MonitoringService) { 
    if(this.sessionService.isConnected == false){
      this.router.navigate(['/login']);
      console.log("DECONNECTE")
    } 
    this.updatePieChart()
  }
// Créer une fonction pour afficher le nombre d'utilisation via le monitoring
  updatePieChart(){

  }
  ngOnInit() {
  }

}
