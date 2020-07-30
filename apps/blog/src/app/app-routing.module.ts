import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsPageComponent } from './posts-page/posts-page.component';

const routes: Routes = [
  {
    path: '',
    component: PostsPageComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }