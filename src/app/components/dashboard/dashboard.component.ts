import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  videos: Video[];
  users: User[];
  type: boolean;

  constructor(private videoService: VideoService, private userService: UserService) { }

  ngOnInit() {
    this.getVideos();
    this.getUsers();
    this.type = false;
  }
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
  add(name: string, type: boolean): void{
    name = name.trim();
    if(!name) { return;}
    this.userService.addUser({name, type} as User)
    .subscribe(user => {
      this.users.push(user);
    })
  }

  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.videos = videos.slice(1, 5));
  }
}