import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { ConfirmationService } from './confirmation.service';
import { catchError, map, tap } from 'rxjs/operators'; //For error handling
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//Handles all services for User, connection to DB and CRUD operations
export class UserService {
  private userUrl = 'api/users'; //URL to web api
  

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl)
  }

  getUser(id: number): Observable<User>{
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url);
  }

  searchUser(term: string): Observable<User[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<User[]>(`${this.userUrl}/?name=${term}`);
    //TODO: Pipe->handleError + search on ID
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.userUrl, user, httpOptions);
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.userUrl, user, httpOptions);
  }

  deleteUser(user: User | number): Observable<User>{
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.userUrl}/${id}`;
    return this.http.delete<User>(url, httpOptions);
  }

  constructor(private http: HttpClient) { }
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};