import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  youtubeUrl: string = "";
  safeURL : SafeUrl = "";
  
  @Output() resultURL : EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  //Checking the urls

  onSubmit() {

    //Url in Blank

    if(!this.youtubeUrl){
      console.log("Please Add a video URL of youtube");
    }
    
    // Request to a bad url
    else{
      if(!this.youtubeUrl.match(/youtube\.com/)){
        console.log("Please enter a valid URL");
      }
    //Process the URL
      else{
        console.log("https://www.youtube.com/embed/"+this.youtubeUrl.split("=")[1]);
        this.resultURL.emit("https://www.youtube.com/embed/"+this.youtubeUrl.split("=")[1]);
      }
      //Clean the input
      this.youtubeUrl = "";
    }
  }

}
