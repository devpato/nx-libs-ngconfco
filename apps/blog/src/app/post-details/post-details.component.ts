import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngconf-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  id: string;
  post$: Observable<Entry<any>>;

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.post$ = this.contentfulService.getPost(this.id);
  }

}