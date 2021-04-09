import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

export interface ICounter {
  [field: string]: number;
}

export const initialState: ICounter = {};

// tslint:disable-next-line:variable-name
const _counterReducer = createReducer(
  initialState,
  on(increment, (state, {counterName}) => {
    return {...state, [counterName]: (state[counterName] ?? 0) + 1};
  }),
  on(decrement, (state, {counterName}) => {
    return {...state, [counterName]: (state[counterName] ?? 0) - 1};
  }),
  on(reset, () => {
    return {};
  })
);

export function counterReducers(state: ICounter, action: any): any {
  return _counterReducer(state, action);
}
