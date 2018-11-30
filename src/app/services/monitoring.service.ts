import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
  mnistUsageCount = 0;

  constructor() { }

  incrementMnistUsage(){
    this.mnistUsageCount++;
  }

  getMnistUsageCount(){
    return this.mnistUsageCount;
  }

}
