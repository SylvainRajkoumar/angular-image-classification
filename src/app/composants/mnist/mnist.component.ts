import { Component, OnInit } from '@angular/core';
import { MonitoringService } from '../../services/monitoring.service';

@Component({
  selector: 'app-mnist',
  templateUrl: './mnist.component.html',
  styleUrls: ['./mnist.component.css']
})
export class MnistComponent implements OnInit {
  selectedFile :File = null;
  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  constructor(public monitoringService: MonitoringService) {
    this.monitoringService.incrementMnistUsage();
   }

  ngOnInit() {
  }

}
