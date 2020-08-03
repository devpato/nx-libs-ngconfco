import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';
import { Entry } from 'contentful';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngconf-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  posts$: Observable<any>
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts$ = this.blogService.posts$;
  }

}