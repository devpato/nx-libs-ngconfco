import { Component, OnInit } from '@angular/core';

import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngconf-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  posts$: Observable<Entry<any>[]>
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.posts$ = this.contentfulService.getPosts();
  }

}