import { Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Video } from '../../../Video';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, OnChanges {

  videos: Video[] = [];

  @Input() newEntryHistory : Video = {
        urlVideo : "",
        bookmark : false
      };

  @Output() videoService : EventEmitter<Video> = new EventEmitter;
  
  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    //Request the data of the backend
    this.apiService.getHistory().subscribe((videos: Video[]) => (this.videos = videos));
  }

  ngOnChanges(): void{
    //Check the changes of the inputs and update the values on this.videos
      this.apiService.getHistory().subscribe((videos: Video[]) => (this.videos = videos));
  }

  //Return the value of the link video clicked

  showurl(video:Video){
    this.videoService.emit(video);
  }

}
