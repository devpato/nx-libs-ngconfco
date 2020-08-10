import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsPageComponent } from './posts-page/posts-page.component';

/**
 * UI Lib Module
 */
import { UiModule } from '@ngconf/ui';
@NgModule({
  declarations: [AppComponent, PostDetailsComponent, PostsPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, UiModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
