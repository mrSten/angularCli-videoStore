import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { ConfirmationsComponent } from './components/confirmations/confirmations.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LocalMemoryDataService }  from './services/local-memory-data.service';
import { VideoSearchComponent } from './components/video-search/video-search.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoDetailComponent,
    ConfirmationsComponent,
    DashboardComponent,
    VideoSearchComponent,
    HistoryComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // Temp simulation, change when real impl. to API
    HttpClientInMemoryWebApiModule.forRoot(
      LocalMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
