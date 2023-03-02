import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Store } from '@ngrx/store';
import { getPostById } from '../state/posts.selector';
import { PostInterface } from './../types/post.interface';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updatePost, deletePost } from './../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: PostInterface;
  postForm: FormGroup;
  postSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppStateInterface>,
    private router: Router
  ) {}

  ngOnInit(): void {
    //get the route id 👇
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      console.log(params.get('id'));
      const id = params.get('id');
      this.postSubscription = this.store
        .select(getPostById, { id })
        .subscribe((data) => {
          this.post = data;
          console.log(this.post);
          this.createForm();
        });
    });
  }
  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onEditPostSubmit(): void {
    const title = this.postForm.value.title;
    const description = this.postForm.value.description;
    const post: PostInterface = {
      id: this.post.id,
      title,
      description,
    };
    //dispatch the action : edit post 👇
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['posts']);
  }

  ngOnDestroy(): void {
    if (this.postSubscription) this.postSubscription.unsubscribe();
  }
}
