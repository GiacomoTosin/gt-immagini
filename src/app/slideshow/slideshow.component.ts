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

  link = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNGfD_Vi3uXEc8cjUcUPOseRKf0xwAKhe6ZSyJMKj0BKQTBox&s',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmpED4bZ1hav6blg_MarzwQZa9uNSHSjH_Qc55kg1TZD3wLrU&s',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBc9OnaAFgzkN0VmMSag_duouM4k_suo_8Rzubf6o3xeQHTiv1&s',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgsN9VxiqLKJBCOFvdJzH59vRTfoa1lPk9wKGFsMQzO4o6D0j&s',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSgbeoHhSqjWSQo3CNdtGvP0-1GyPTAhR9scBlwbwPpEJXu5h&s',
  
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDaeFz6yILI7GlL8jzqqWy99WRXj3EWM9pY4Q8gf9g7S9Fv1NuNg&s'
  ];

  numero = this.link[this.x];

  destra(){
    if(this.x == 5){
      this.x = 0;
      this.numero = this.link[this.x];
    }else{
      this.x = this.x + 1;
      this.numero = this.link[this.x];
    }
  }
  sinistra(){
        if(this.x ==0){
      this.x = 5;
      this.numero = this.link[this.x];
    }else{
      this.x = this.x - 1;
      this.numero = this.link[this.x];
    }
  }
  scambiatimer(){
    
  }

}