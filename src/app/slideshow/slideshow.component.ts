import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  x = 0;

  link = [''];

  numero = this.link[this.x];

  destra(){
    if(this.x ==10){
      this.x = 0;
      this.numero = this.link[this.x];
    }else{
      this.x = this.x + 1;
      this.numero = this.link[this.x];
    }
  }
  sinistra(){
        if(this.x ==0){
      this.x = 10;
      this.numero = this.link[this.x];
    }else{
      this.x = this.x - 1;
      this.numero = this.link[this.x];
    }
  }

}