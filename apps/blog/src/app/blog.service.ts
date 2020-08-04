import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  BASE_URL = 'https://ngconf-52e39.firebaseio.com/';
  BLOG_EP = 'posts.json';

  constructor(private http: HttpClient) { }

  posts$ = this.http.get<Post[]>(this.BASE_URL + this.BLOG_EP);

  getPost(id: String): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_URL}/posts/${id}.json`);
  }
}
