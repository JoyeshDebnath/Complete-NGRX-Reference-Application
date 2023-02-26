import { createReducer } from '@ngrx/store';
import { initialState } from './posts.state';
import { PostStateInterface } from './../types/postState.interface';
const _postReducer = createReducer(initialState);

export function postReducer(state, action) {
  return _postReducer(state, action);
}
