import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostStateInterface } from '../types/postState.interface';
import { PostInterface } from './../types/post.interface';
//step 1:  create feature selector ..
const getPostState = createFeatureSelector<PostStateInterface>('posts');

//step 2 : create create selector ..
export const getPosts = createSelector(getPostState, (state) => {
  console.log('Posts :', state.posts);
  return state.posts;
});

//get post by id selector ..
export const getPostById = createSelector(
  getPostState,
  (state, props): PostInterface => {
    const post = state.posts.find((post) => post.id == props.id);
    return post;
  }
);
