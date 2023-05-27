import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StrengthPipe } from './pipe/strength/strength.pipe';
import { PostsComponent } from './post-details/posts/posts.component';
import { PostComponent } from './post-details/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
