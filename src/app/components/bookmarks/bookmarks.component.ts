import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Video } from '../../../Video';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarks: Video[] = [];
  @Input() bookmarkUrl: Video ={
    urlVideo:'',
    bookmark:true,
  }

  @Output() videoService : EventEmitter<Video> = new EventEmitter;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBookmarks().subscribe((bookmarks: Video[]) => (this.bookmarks = bookmarks));
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.apiService.getBookmarks().subscribe((bookmarks: Video[]) => (this.bookmarks = bookmarks));

  }

  showurl(video:Video){
    this.videoService.emit(video);
  }

}
