import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../types/post.interface';
import { AppStateInterface } from './../../types/appState.interface';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { Store } from '@ngrx/store';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  constructor(private store: Store<AppStateInterface>) {}
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onPostFormSubmit(): void {
    console.log(this.postForm.value);
    const post: PostInterface = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(addPost({ post })); //send the props ..
  }

  // custom validation
  showDescriptionErrors(): string {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors?.['required']) {
        return 'Description is required!';
      } else if (descriptionForm.errors?.['minlength']) {
        return 'Description must be at-least 6 characters long!';
      }
    }
    return '';
  }
}
