import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { HistoryComponent } from './components/history/history.component';

//Available routes
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'videos/:id', component: VideosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'detail/:id', component: VideoDetailComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }