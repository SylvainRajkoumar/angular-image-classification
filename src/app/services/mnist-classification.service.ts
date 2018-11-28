import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
const tf = require('@tensorflow/tfjs');

@Injectable({
  providedIn: 'root'
})

export class MnistClassificationService {
  model = null;
  constructor() { }

  loadModel(){
    this.model = tf.loadModel('https://drive.google.com/open?id=1jsNS3E1fW5ILY_gW_cQ4dCq-22jCzurK');
    // this.model = tf.loadModel(
    //   tf.io.browserFiles(['../../../mnist_model/model.json', '../../../mnist_model/group1-shard1of4']));
  }
}

