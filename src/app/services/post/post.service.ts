import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from '../../models/post.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
  ) { }

  getPost(): Observable<post[]> {
    return this.http.get<post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  deletePost(post: post) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)

  }
}
