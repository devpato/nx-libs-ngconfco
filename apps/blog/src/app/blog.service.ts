import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  BASE_URL = 'https://ngconf-52e39.firebaseio.com/';
  BLOG_EP = 'posts.json';

  constructor(private http: HttpClient) { }

  posts$ = this.http.get(this.BASE_URL + this.BLOG_EP);

  getPost(id: String) {
    return this.http.get(`${this.BASE_URL}/posts/${id}.json`);
  }
}
