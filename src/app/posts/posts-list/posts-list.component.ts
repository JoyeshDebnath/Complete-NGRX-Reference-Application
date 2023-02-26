import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from './../../types/appState.interface';
import { PostInterface } from './../types/post.interface';
import { getPosts } from './../state/posts.selector';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts$: Observable<PostInterface[]>; //posts observable ....
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    //get the posts from the store
    this.posts$ = this.store.select(getPosts);
    console.log(this.posts$);
  }
}
