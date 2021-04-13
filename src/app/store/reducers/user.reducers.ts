import { createFeatureSelector, createReducer } from '@ngrx/store';

export interface IUser {
  name: string;
  bonuses: number
}

export const initialState: IUser = {
  name: 'Ihor',
  bonuses: 0.8,
};

// tslint:disable-next-line:variable-name
const _userReducer = createReducer(
  initialState,
);


export const selectUserState = createFeatureSelector<IUser>('user');


export function userReducer(state: IUser, action: any): any {
  return _userReducer(state, action);
}
