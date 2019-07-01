import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Video } from '../models/video';
import { User } from '../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//Local temp-database
export class LocalMemoryDataService implements InMemoryDbService {
  createDb() {
    const videos = [
      { id: 11, name: 'Enter The Matrix', type: "DVD", price: 29 },
      { id: 12, name: 'Avengers', type: "DVD", price: 29 },
      { id: 13, name: 'Toy Story 4', type: "BlueRay", price: 39 },
      { id: 14, name: 'Spider-Man', type: "DVD", price: 29 },
      { id: 15, name: 'Lejonkungen', type: "BlueRay", price: 39 },
      { id: 16, name: 'X-men', type: "DVD", price: 29 },
      { id: 17, name: 'Godzilla', type: "BlueRay", price: 39 },
      { id: 18, name: 'Shazam!', type: "DVD", price: 29 },
      { id: 19, name: 'Annabelle', type: "BlueRay", price: 39 },
      { id: 20, name: 'Frost', type: "DVD", price: 29 }
    ];
    const users = [
     {id: 1, name: 'Stefan Löfgren', type: false },
     {id: 2, name: 'Fredrik Bogren', type: false },
     {id: 3, name: 'Marcus Olofsson', type: true },
     {id: 4, name: 'Patrik Chu', type: true },
     {id: 5, name: 'Leon Östman', type: false },
     {id: 6, name: 'Robin Thorzelius', type: true },
     {id: 7, name: 'Magnus Västman', type: false },
     {id: 8, name: 'Olof Svensson', type: true }  
    ];
    const takenVideos = [
      { id: 21, name: 'Mad Max', type: "DVD", price: 29 },
      { id: 22, name: 'Star Wars', type: "BlueRay", price: 39}
    ]
    return { videos, users, takenVideos };
    
  }

  genId(videos: Video[]): number {
    return videos.length > 0 ? Math.max(...videos.map(video => video.id)) + 1 : 11;
  }
}