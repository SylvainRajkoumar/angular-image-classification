import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
const tf = require('@tensorflow/tfjs');

@Injectable({
  providedIn: 'root'
})

export class MnistClassificationService {
  model = null;
  predictions = null;
  constructor() { 
    this.loadModel()
  }

  async loadModel(){
    this.model = await tf.loadModel('./assets/mnist_model/model.json');
  }

  getClassificationResult(image){
    const img = new Image(28, 28);
    img.src = './assets/mnist_images/' + image;
    console.log(img.src);
    let tempArray = []
    tempArray.push(tf.fromPixels(img));
    // tf.fromPixels(img).print();
    this.model.predict(tempArray).print();
  }
}

