import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter} from '@angular/core';
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
    this.apiService.getHistory().subscribe((videos: Video[]) => (this.videos = videos));
  }

  ngOnChanges(changes: SimpleChanges): void{
    if(changes.newEntryHistory.currentValue != changes.newEntryHistory.previousValue){
      this.apiService.getHistory().subscribe((videos: Video[]) => (this.videos = videos));
    }
  }

  showurl(video:Video){
    this.videoService.emit(video);
  }

}
