import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment', props<{ counterName: string }>());
export const decrement = createAction('[Counter Component] Decrement', props<{ counterName: string }>());
export const reset = createAction('[Counter Component] Reset');
