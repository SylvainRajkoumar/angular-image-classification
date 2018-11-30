import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
  
  mnistUsageCount = 0;
  catsDogsUsageCount = 0;

  constructor() { }

  incrementMnistUsage(){
    this.mnistUsageCount++;
  }

  incrementcatsDogsUsage(){
    this.catsDogsUsageCount++;
  }
  getMnistUsageCount(){
    return this.mnistUsageCount;
  }
  
  getcatsDogsUsageCount(){
    return this.catsDogsUsageCount;
  }

}
