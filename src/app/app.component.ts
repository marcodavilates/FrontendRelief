import { Component } from '@angular/core';
import {SafeUrl } from '@angular/platform-browser';
import { Video } from '../Video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReliefApp';
  urlView : Video = {
    urlVideo :"",
    bookmark : true,
  };
  urlBookmark : Video = {
    urlVideo :"",
    bookmark : true,
  };


  reproduceVideo(video: Video){
    this.urlView = video;
  }
  updateBookmark(video:Video){
    this.urlBookmark = video;
  }

}
