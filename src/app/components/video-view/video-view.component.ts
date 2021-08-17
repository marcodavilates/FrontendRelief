import { Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Video } from '../../../Video';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})


export class VideoViewComponent implements OnChanges {

  @Output() updateBookmark : EventEmitter<Video> = new EventEmitter();
  
  @Input() linkVideo  : Video = {
        urlVideo : "",
        bookmark : false
      };


  emptyURL : boolean = false;

  safeURL: SafeUrl ="";


  constructor(private sanitizer: DomSanitizer, private apiService: ApiService) {
   }

   ngOnChanges(): void{

    //check if the input is filled

    this.emptyURL = this.linkVideo.urlVideo != ""; 
    //Sanitizing the URL, to add the embed URL in the HTML file
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.linkVideo.urlVideo.split("=")[1]+"?autoplay=1");
  }

  //Update the value of the bookmarks
  bookmark(){
    //Changing the value of the bookmarks
    this.linkVideo.bookmark = !this.linkVideo.bookmark;
    //PUT Request to the backend to update bookmarks
    this.apiService.updateBookmarks(this.linkVideo).subscribe((video: Video) => {
      this.linkVideo = video;
      this.updateBookmark.emit(this.linkVideo);
    });
  }

}
