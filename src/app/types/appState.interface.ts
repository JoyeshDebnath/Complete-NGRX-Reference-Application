import { CounterStateInterface } from './../counter/types/counterState.interface';
import { PostStateInterface } from './../posts/types/postState.interface';

export interface AppStateInterface {
  counter: CounterStateInterface;
  posts: PostStateInterface;
}
