import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video';
import { User } from '../../models/user';
import { VideoService } from '../../services/video.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[];
  user: User;
  chosenVideos: Video[] = [];
  totalPrice: number;

  constructor(
    private videoService: VideoService, 
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  ngOnInit() {
    this.getVideos();
    this.getUser();
    this.totalPrice = 0;
  }
  
  onButtonClick(videos: Video[]): void {
    for(let video of videos){
      if(this.user.type){
        if(video.type == "DVD"){
          video.price = (video.price*0.9); //if dvd+member
        }else {
          video.price = (video.price*0.85); //if blueray+member
        }
      }
      this.videoService.addHistoryVideo(video)
      .subscribe();
      this.videoService.deleteVideo(video)
      .subscribe();
    }
    this.getVideos(); //updates (local) video array
    this.chosenVideos = []; //removes taken videos from 'chosen' (local) array
  }

  choseVideo(id: number): void {
    if(this.user.type){
    this.videoService.getVideo(id)
    .subscribe(video => {
      if(video.type == "DVD"){
        this.totalPrice += (video.price*0.9)
      }else{
        this.totalPrice += (video.price*0.85)
      }
    });

    }else {
      this.videoService.getVideo(id)
      .subscribe(video => this.totalPrice += video.price)
    }
    this.videoService.getVideo(id)
    .subscribe(video => this.chosenVideos.push(video));
  }
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
    .subscribe(user => this.user = user);
  }

  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.videos = videos);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.videoService.addVideo({ name } as Video)
      .subscribe(video => {
        this.videos.push(video);
      });
  }
  delete(video: Video): void {
    this.videos = this.videos.filter(v => v !== video);
    this.videoService.deleteVideo(video).subscribe();
  }

}
