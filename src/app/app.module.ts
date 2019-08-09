import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodingChallengeComponent } from './coding-challenge/coding-challenge.component';
import { ReadMeComponent } from './read-me/read-me.component';
import { SearchPipe } from './pipes/search.pipe';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";

const appRoutes: Routes = [
  { path: 'coding-challenge', component: CodingChallengeComponent },
  { path: 'add-post', component: AddPostComponent },
  //{ path: 'album-detail/:id', component: AlbumsDetailComponent },
  { path: 'read-me', component: ReadMeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CodingChallengeComponent,
    ReadMeComponent,
    SearchPipe,
    AddPostComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
