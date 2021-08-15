import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})


export class VideoViewComponent implements OnChanges {


  @Input() linkVideo : string ="";
  test : boolean = false;
  safeURL: SafeUrl ="";
  constructor(private sanitizer: DomSanitizer) {
   }

   ngOnChanges(changes: SimpleChanges): void{
    this.test = changes.linkVideo.currentValue != ""; 
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(changes.linkVideo.currentValue+"?autoplay=1");
     
    

  }

}
