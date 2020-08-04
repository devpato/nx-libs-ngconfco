import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';
import { Observable } from 'rxjs';
import { BlogService } from '../blog.service';
import { Post } from '@ngconf/post';
@Component({
  selector: 'ngconf-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  id: string;
  post$: Observable<Post>;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.post$ = this.blogService.getPost(this.id);
  }

}