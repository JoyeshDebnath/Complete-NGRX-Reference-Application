import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostStateInterface } from '../types/postState.interface';
//step 1:  create feature selector ..
const getPostState = createFeatureSelector<PostStateInterface>('posts');

//step 2 : create create selector ..
export const getPosts = createSelector(getPostState, (state) => {
  console.log('Posts :', state.posts);
  return state.posts;
});
