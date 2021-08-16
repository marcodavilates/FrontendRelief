import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../../../Video';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  
  video : string = "";
  urlinput : string = "";
  videoResult: Video = {
    urlVideo: "",
    bookmark: false,
  };

  @Output() resultURL : EventEmitter<Video> = new EventEmitter();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}


  //Checking the urls

  onSubmit() {

    //Url in Blank

    if(!this.urlinput){
      console.log("Please Add a video URL of youtube");
    }
    
    // Request to a bad url
    else{
      if(!this.urlinput.match(/youtube\.com/)){
        console.log("Please enter a valid URL");
      }
    //Process the URL
      else{
        this.video = this.urlinput;
        this.videoResult.urlVideo = this.urlinput;
        this.apiService.addVideo(this.videoResult).subscribe((video:Video) =>{
          this.videoResult = video;
          this.resultURL.emit(this.videoResult);
        } );

      }
      //Clean the input
      this.urlinput = "";
    }
  }

}
