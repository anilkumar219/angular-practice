import { Action, createAction, props } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_SUCCESS = '[Auth] Login';
export const AUTHENTICATE_FAIL = '[Auth] Login Fail';
export const SIGNUP_START = '[Auth] Signup Start';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const LOGOUT = '[Auth] Logout';

export const AuthenticateSuccess = createAction(AUTHENTICATE_SUCCESS, props<any>());
export const Logout = createAction(LOGOUT);
export const LoginStart = createAction(LOGIN_START, props<any>());
export const AuthenticateFail = createAction(AUTHENTICATE_FAIL, props<any>());
export const SignupStart = createAction(SIGNUP_START, props<{email: string, password: string}>());
export const ClearError = createAction(CLEAR_ERROR);
export const AutoLogin = createAction(AUTO_LOGIN);
