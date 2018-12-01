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
  
  public chartType:string = 'pie';

  public chartData:Array<any> = [0 ,  0];

  public chartLabels:Array<any> = ['Mnist', 'Cats&Dogs'];

  public chartColors:Array<any> = [{
      hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
      hoverBorderWidth: 0,
      backgroundColor: ["#F7464A", "#46BFBD"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
  }];

  public chartOptions:any = {
      responsive: true
  };
  
  constructor(public sessionService: SessionService, private router: Router, public monitoringService: MonitoringService) { 
    if(this.sessionService.isConnected == false){
      this.router.navigate(['/login']);
    }

    this.chartData[0] = this.monitoringService.getMnistUsageCount()
    this.chartData[1] = this.monitoringService.getcatsDogsUsageCount();
  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  ngOnInit() {
  }

}
