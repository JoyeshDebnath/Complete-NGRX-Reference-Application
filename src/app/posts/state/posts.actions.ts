import { createAction, props } from '@ngrx/store';
import { PostInterface } from './../types/post.interface';
import {
  ADD_POST_ACTION,
  UPDATE_POST_ACTION,
  DELETE_POST_ACTION,
} from './post-actions.variables';
//action types
// export const ADD_POST_ACTION = '[posts page] add post';
// action types ..
// actual actions[ADD POST Action  ] 👇
export const addPost = createAction(
  ADD_POST_ACTION,
  props<{ post: PostInterface }>()
);
//update post action 👇
export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: PostInterface }>()
);
//delete a post 👇

export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: number }>()
);
