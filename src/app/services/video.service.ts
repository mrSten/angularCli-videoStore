import { Injectable } from '@angular/core';
import { Video } from '../models/video';
import { Observable, of } from 'rxjs';
import { ConfirmationService } from './confirmation.service';
import { catchError, map, tap } from 'rxjs/operators'; //For error handling
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class VideoService {
  private videosUrl = 'api/videos';  // URL to web api
  private takenVideosUrl = 'api/takenVideos';

  /** 
   * TODO: Handle errors in a good way
   private handleError<T> (operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {
       
       console.error(error); 
       
       this.log(`${operation} failed: ${error.message}`);
       
       return of(result as T);
      };
    }
  */

  //CRUD(create, read, update, delete) to / from server:
  
  /** GET videos  from the server */
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videosUrl)
  }
  /** GET video by id. Will 404 if id not found */
  getVideo(id: number): Observable<Video> {
    const url = `${this.videosUrl}/${id}`;
    return this.http.get<Video>(url);
    //TODO: Pipe->handleError
  }
  /* GET videos whose name contains search term */
  searchVideos(term: string): Observable<Video[]> {
    if (!term.trim()) {
      // if not search term, return empty video array.
      return of([]);
    }
    return this.http.get<Video[]>(`${this.videosUrl}/?name=${term}`);
    //TODO: Pipe->handleError
  }

  /**UPDATE: updates video to server */
  updateVideo(video: Video): Observable<any> {
    return this.http.put(this.videosUrl, video, httpOptions);
    //TODO: Pipe->handleError  
  }
  /** ADD: adds video to server */
  addVideo(video: Video): Observable<Video> {
    return this.http.post<Video>(this.videosUrl, video, httpOptions);
    //TODO: Pipe->handleError  
  }
  /** DELETE: delete the video from the server */
  deleteVideo(video: Video | number): Observable<Video> {
    const id = typeof video === 'number' ? video : video.id;
    const url = `${this.videosUrl}/${id}`;
    return this.http.delete<Video>(url, httpOptions);
    //TODO: Pipe->handleError  
  }

  //temp solution video history: TODO: State of videos instead of seperate array
  getHistoryVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.takenVideosUrl)
  }
  //"moves" videos from 'normal' to movies that are taken out
  moveVideos(videos: Video[]): void {
    for(let video of videos){
      this.addHistoryVideo(video);
      this.deleteVideo(video);
    }
  }
  addHistoryVideo(video: Video): Observable<Video> {
    return this.http.post<Video>(this.takenVideosUrl, video, httpOptions);
    
  }

  /** Logs a VideoService message with the MessageService */
  private log(message: string) {
    this.confirmationService.add(`VideoService: ${message}`);
  }

  constructor(private confirmationService: ConfirmationService,
    private http: HttpClient) { }
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

