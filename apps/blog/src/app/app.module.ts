import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent, PostDetailsComponent, PostsPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
