import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostStateInterface } from '../types/postState.interface';
import { PostInterface } from './../types/post.interface';
import { POST_STATE_NAME } from './../post.state.name';
//step 1:  create feature selector ..
const getPostState = createFeatureSelector<PostStateInterface>(POST_STATE_NAME);

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
