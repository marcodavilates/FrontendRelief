import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
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

  videoEmbed : Video = {
    urlVideo : "",
    bookmark : false
  };

  emptyURL : boolean = false;
  safeURL: SafeUrl ="";
  constructor(private sanitizer: DomSanitizer, private apiService: ApiService) {
   }

   ngOnChanges(changes: SimpleChanges): void{
    this.videoEmbed = changes.linkVideo.currentValue;
    this.emptyURL = this.videoEmbed.urlVideo != ""; 
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.videoEmbed.urlVideo.split("=")[1]+"?autoplay=1");
  }

  bookmark(){
    this.videoEmbed.bookmark = !this.videoEmbed.bookmark;
    this.apiService.updateBookmarks(this.videoEmbed).subscribe((video: Video) => {
      this.videoEmbed = video;
      this.updateBookmark.emit(this.videoEmbed);
    });
  }

}
