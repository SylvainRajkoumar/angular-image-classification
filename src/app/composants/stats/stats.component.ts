import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { MonitoringService } from '../../services/monitoring.service';
import { Chart } from 'mdbootstrap';

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
  }
// Créer une fonction pour afficher le nombre d'utilisation via le monitoring
  updatePieChart(){
    let ctxP = document.getElementById("pieChart").getContext('2d');
    let myPieChart = new Chart(ctxP, {
      type: 'pie',
      data: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [{
          data: [300, 50, 100, 40, 120],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
        }]
      },
      options: {
        responsive: true
      }
    });
  }
  ngOnInit() {
  }

}
