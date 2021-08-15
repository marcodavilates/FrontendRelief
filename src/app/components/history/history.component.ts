import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Video } from '../../../Video';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  videos: Video[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getHistory().subscribe((data: Video[]) => (this.videos = data));
    
  }

}
