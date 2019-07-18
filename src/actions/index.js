import { login } from '../api';
import { PATHS } from '../constants'

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const POST_GET = 'POST_GET';
export const POST_ADD = 'POST_ADD';

export function doAuthentication(history) {
  return async (dispatch) => {
    login(
      (user) => {
        if (user) {
          dispatch({ type: LOGIN, user });
          history.push(PATHS.home);
        }
      }
    );
  }
}

export function doLogout(history) {
  return async (dispatch) => {
    history.push(PATHS.login);
    dispatch({ type: LOGOUT });
  }
}
