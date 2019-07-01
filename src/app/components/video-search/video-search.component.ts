import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video';
import { VideoService } from '../../services/video.service';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: [ './video-search.component.css' ]
})
export class VideoSearchComponent implements OnInit {
  videos$: Observable<Video[]>;
  
  private searchTerms = new Subject<string>();
 
  constructor(private videoService: VideoService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    
    this.videos$ = this.searchTerms.pipe(
      // wait 0ms after each keystroke before considering the term
      debounceTime(0),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.videoService.searchVideos(term)),
    );
  }
}