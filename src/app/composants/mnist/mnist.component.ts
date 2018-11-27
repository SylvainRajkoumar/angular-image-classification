import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
