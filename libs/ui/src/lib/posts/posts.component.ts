import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from '@ngconf/post';

@Component({
  selector: 'ngconf-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() posts: Post[];
  constructor() { }

  ngOnInit(): void {
  }

}
