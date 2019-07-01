import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../models/video'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VideoService} from '../../services/video.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
//Unused class-> for future details on movies (seperate view)
export class VideoDetailComponent implements OnInit {
  @Input() 
  
  video: Video;
  
  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getVideo();
  }
  getVideo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.videoService.getVideo(id)
    .subscribe(video => this.video = video);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.videoService.updateVideo(this.video)
    .subscribe(() => this.goBack());
  }

}
