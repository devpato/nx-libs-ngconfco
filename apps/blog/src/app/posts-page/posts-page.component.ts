import { Component, OnInit } from '@angular/core';
import { Post } from '../post.interface';
import { BlogService } from '../blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngconf-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  posts$: Observable<Post[]>
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts$ = this.blogService.posts$;
  }

}