import { createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';
import { PostStateInterface } from './../types/postState.interface';
import { addPost, deletePost, updatePost } from './posts.actions';
const _postReducer = createReducer(
  initialState,
  on(addPost, (state: PostStateInterface, action) => {
    let post = { ...action.post };
    post.id = state.posts.length + 1;
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state: PostStateInterface, action) => {
    //update the post with given id ..
    let updatedPost = state.posts.map((post) => {
      return post.id === action.post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(deletePost, (state: PostStateInterface, action) => {
    let updatedPosts = state.posts.filter((post) => {
      return post.id != action.id;
    });

    return {
      ...state,
      posts: updatedPosts,
    };
  })
);

export function postReducer(state, action) {
  return _postReducer(state, action);
}
