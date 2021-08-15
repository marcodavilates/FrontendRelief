import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../../Video';

const httpHeaderContent = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {}

  getHistory(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }

  getBookmarks(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl+"bookmarks");
  }

  addTask(video: Video): Observable<Video> {

    return this.http.post<Video>(this.apiUrl, video, httpHeaderContent);
  
  }
    //deleteTask(task: Task): Observable<Task> {
  //  const url = `${this.apiUrl}/${task.id}`;
  // return this.http.delete<Task>(url);
  //}

  //updateTaskReminder(task: Task): Observable<Task> {
  //  const url = `${this.apiUrl}/${task.id}`;
  //  return this.http.put<Task>(url, task, httpOptions);
  //}

  //
  //}

}
