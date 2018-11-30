import { Component, OnInit } from '@angular/core';
const tf = require('@tensorflow/tfjs');

@Component({
  selector: 'app-deeplearning',
  templateUrl: './deeplearning.component.html',
  styleUrls: ['./deeplearning.component.css']
})
export class DeeplearningComponent implements OnInit {
  modelName;
  model;
  CLASSES = ["Chat", "Chien"];

  constructor() { }

  ngOnInit() {
  }

  loadDemoImage() {
    let base_path = "/test1/test_img_"
    let maximum = 409;
    let minimum = 1;
    var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let img_path = base_path + randomnumber + ".jpg";
    (<HTMLImageElement>document.getElementById("test-image")).src = img_path;
    console.log(img_path);
  }
  
//   renderImage(file) {
//       var reader = new FileReader();
//       reader.onload = function(event) {
//           let img_url = reader.result;
//           (<HTMLImageElement>document.getElementById("test-image")).src = img_url;
//       }
//       reader.readAsDataURL(file);
//   }
  
//   loadImageFromDisk() {
//       document.getElementById("predict-result").style.display = "table-cell";
//       document.getElementById("prediction").innerHTML = "Click predict to find my label!";
//     this.renderImage(this.files[0]);
//   };
  
  
//   async loadModel() {
//       let modelName = document.getElementById('choose_model').value
//       if (modelName === '') return;
  
//       console.log("model loading..");
//       let loader = document.getElementById("loader");
  
//       loader.style.display = "block";
  
//       let model = undefined;
//       model = await tf.loadModel("tfjs-models-" + modelName + "/model.json");
  
//       loader.style.display = "none";
      
//       console.log("model loaded..");
//   }
  
//   function preprocessImage(image, modelName) {
//     let tensor = tf.fromPixels(image)
//       .resizeNearestNeighbor([224, 224])
//       .toFloat();
  
//     if (modelName === undefined) {
//       return tensor.expandDims();
//     } else if (modelName === "mobilenet") {
//       let offset = tf.scalar(127.5);
//       return tensor.sub(offset)
//         .div(offset)
//               .expandDims();
//       } else if (modelName === "resnet50") {
//       let offset = tf.scalar(127.5);
//       return tensor.sub(offset)
//         .div(offset)
//               .expandDims();
  
//       } else {
//       alert("Unknown model name..")
//     }
//   }
  
//   async function predict() {
//     if (model == undefined) {
//       alert("Please load the model first..")
//       }
//       document.getElementById("prediction").innerHTML = "Wait ... :)";
  
//     console.log(model);
//     let image  = document.getElementById("test-image");
//     let tensor = preprocessImage(image, modelName);
  
//     let predictions = await model.predict(tensor).data();
//     let results = Array.from(predictions)
//       .map(function (p, i) {
//         return {
//           probability: p,
//           className: CLASSES[i]
//         };
//       }).sort(function (a, b) {
//         return b.probability - a.probability;
//       }).slice(0, 5);
  
//     document.getElementById("predict-result").style.display = "block";
//     document.getElementById("prediction").innerHTML = (modelName == "mobilenet" ? "MobileNet" : "ResNet50") + " prediction " + results[0].className + "</b>";
  
//     var ul = document.getElementById("predict-list");
//     ul.innerHTML = "";
//     results.forEach(function (p) {
//       console.log(p.className + " " + p.probability.toFixed(6));
//       var li = document.createElement("li");
//       li.innerHTML = p.className + " " + p.probability.toFixed(6);
//       ul.appendChild(li);
//     });
//   };
  
//   document.getElementById('predict_btn').onclick = predict;
//   document.getElementById('load_test_image').onclick = loadDemoImage;
//   document.getElementById('choose_model').onchange = loadModel;
//   document.getElementById('select-file-image').onchange = loadImageFromDisk;
}
