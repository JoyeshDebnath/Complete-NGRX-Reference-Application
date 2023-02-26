import { AppStateInterface } from './../types/appState.interface';
import { counterReducer } from './../counter/store/counter.reducer';
import { postReducer } from './../posts/state/posts.reducer';

// export const initialState: AppStateInterface = {};

export const appReducer = {
  counter: counterReducer,
  posts: postReducer,
};
