import { Component } from '@angular/core';
import {SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReliefApp';
  urlID : string = "";
  reproduceVideo(text: string){
    this.urlID = text
  }

}
