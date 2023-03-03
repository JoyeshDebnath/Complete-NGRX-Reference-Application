import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  customIncrement,
} from './counter.actions';

import { initialState } from './counter.state';
import { CounterStateInterface } from './../types/counterState.interface';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state: CounterStateInterface) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state: CounterStateInterface) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state: CounterStateInterface) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state: CounterStateInterface, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter + action.value,
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
