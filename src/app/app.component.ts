import { Component } from '@angular/core';
import { MnistClassificationService } from './services/mnist-classification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  
  constructor(public test: MnistClassificationService){
      this.test.loadModel();
  }
}
