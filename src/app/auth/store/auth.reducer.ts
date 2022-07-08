import { createReducer, on } from '@ngrx/store';
import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false
};

const _authReducer = createReducer(initialState, 
  on(AuthActions.AuthenticateSuccess, (state, action) => {
    const user = new User(
      action.email,
      action.userId,
      action.token,
      action.expirationDate
    );
    return {
      ...state,
      authError: null,
      user: user,
      loading: false
    };
  }),
  on(AuthActions.Logout, (state) => {
    return {
      ...state,
      user: null
    };
  }),
  on(AuthActions.LoginStart, (state) => {
    return {
      ...state,
      authError: null,
      loading: true
    };
  }),
  on(AuthActions.SignupStart, (state) => {
    return {
      ...state,
      authError: null,
      loading: true
    };
  }),
  on(AuthActions.AuthenticateFail, (state, action) => {
    return {
      ...state,
      user: null,
      authError: action,
      loading: false
    };
  }),
  on(AuthActions.ClearError, (state) => {
    return {
      ...state,
      authError: null
    };
  }),
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}

