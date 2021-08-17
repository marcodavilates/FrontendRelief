import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../../../Video';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
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
      alert("Please Add a video URL of youtube");
    }

    // Request to a bad url

    else{
      if(!this.urlinput.match(/youtube\.com/)){
        alert("Please enter a valid URL");
      }
    //Process the URL

      else{
        this.videoResult.urlVideo = this.urlinput;

        //Post Request to the backend to add videos

        this.apiService.addVideo(this.videoResult).subscribe((video:Video) =>{
          this.videoResult = video;
        
          //Emit the response of the backend to process

          this.resultURL.emit(this.videoResult);
        } );

      }

      //Clean the input
      this.urlinput = "";
    }
  }

}
