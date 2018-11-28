import { Component, OnInit } from '@angular/core';
import { MonitoringService } from '../../services/monitoring.service';

@Component({
  selector: 'app-mnist',
  templateUrl: './mnist.component.html',
  styleUrls: ['./mnist.component.css']
})
export class MnistComponent {

  constructor(public monitoringService: MonitoringService) {
    this.monitoringService.incrementMnistUsage();
   }
  
  selectedFile :File = null;
  
  public chartType:string = 'bar';

  public chartDatasets:Array<any> = [
      {data: [0, 59, 80, 81, 56, 55, 40, 50, 50, 50], label: 'Tensorflow Classification Percentage'}
  ];

  public chartLabels:Array<any> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  public chartColors:Array<any> = [
      {
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderColor: 'rgba(255,0,0,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(220,220,220,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(220,220,220,1)'
      }
  ];

  public chartOptions:any = {
      responsive: true
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
    // let path = event.target.files[0].value; 
    // this.tensorflowProcessing(path);
  }
  // loadImage(){
  //   const image = document.getElementById('image');
  //   console.log(image)
  // }
  tensorflowProcessing(imagePath){
    console.log(String(imagePath))
    this.chartDatasets = [
      {data: [0, 59, 80, 100, 500, 1000, 40, 50, 50, 50], label: 'Tensorflow Classification Percentage'}
    ];
  }
}
