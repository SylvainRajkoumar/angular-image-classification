import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
  mnistUsageCount = 10;

  constructor() { }

  incrementMnistUsage(){
    this.mnistUsageCount++;
    console.log(this.mnistUsageCount);
  }

  getMnistUsageCount(){
    return this.mnistUsageCount;
  }

}
