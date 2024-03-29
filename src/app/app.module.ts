import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SlideshowComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
