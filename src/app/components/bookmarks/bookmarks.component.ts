import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Video } from '../../../Video';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit, OnChanges {

  bookmarks: Video[] = [];
  @Input() bookmarkUrl: Video ={
    urlVideo:'',
    bookmark:true,
  }

  @Output() videoService : EventEmitter<Video> = new EventEmitter;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    //Request the data of the backend
    this.apiService.getBookmarks().subscribe((bookmarks: Video[]) => (this.bookmarks = bookmarks));
  }

  ngOnChanges(): void{
    //Check the changes of the inputs and update the values on this.bookmarks
    this.apiService.getBookmarks().subscribe((bookmarks: Video[]) => (this.bookmarks = bookmarks));

  }

  //Return the value of the link video clicked
  showurl(video:Video){
    this.videoService.emit(video);
  }

}
