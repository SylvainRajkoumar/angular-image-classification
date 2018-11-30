import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
const tf = require('@tensorflow/tfjs');

@Injectable({
  providedIn: 'root'
})

export class MnistClassificationService {

  model = null;

  constructor() { 
    this.loadModel();
  }

  async loadModel(){
    this.model = await tf.loadModel('./assets/mnist_model/model.json');
  }

   getClassificationResult(image){
    const img = new Image(28, 28);
    img.src = './assets/mnist_images/' + image;
    let resizeImage = tf.fromPixels(img).resizeNearestNeighbor([128, 128]).toFloat();
    resizeImage = resizeImage.reshape([1, 128, 128, 3]);
    const results = this.model.predict(resizeImage).print();
  }
}

