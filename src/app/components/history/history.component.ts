import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { Video } from '../../models/video';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService) { }

  
  ngOnInit() {
    this.getVideos();
  }
  getVideos(): void {
    this.videoService.getHistoryVideos()
      .subscribe(videos => this.videos = videos);
  }

}
